import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterControllerComponent } from './counter-controller.component';
import { CounterService } from '../counter-services/counter.service';
import { Subscription } from 'rxjs';

describe('CounterControllerComponent', () => {
  let component: CounterControllerComponent;
  let fixture: ComponentFixture<CounterControllerComponent>;
  let counterService: CounterService;

  beforeEach(() => {

    TestBed.configureTestingModule({
      declarations: [CounterControllerComponent],
      providers: [
        CounterService
      ]
    });

    fixture = TestBed.createComponent(CounterControllerComponent);
    counterService = TestBed.inject(CounterService);
    component = fixture.componentInstance;
    
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add 1 on click of first button', () => {
    component.addStepFirst();
    expect(component.currentCount).toBe(2);
  });

  it('should add 2 on click of second button', () => {
    component.addStepSecond();
    expect(component.currentCount).toBe(3);
  });

  it('should add 3 on click of second button', () => {
    component.addStepThird();
    expect(component.currentCount).toBe(4);
  });

  it('should return current count as it is', () => {
    component.currentCount = 7;
    expect(component.getCurrentCount()).toBe(7);
  });

  it('should call addtepFirst and addStepSecond when addStepThird is called', () => {
    spyOn(component, "addStepFirst").and.callThrough();
    component.addStepThird();
    expect(component.addStepFirst).toHaveBeenCalled();
  });

  it('should set initial count to 5', () => {
    spyOn(counterService, "getInitialCount").and.returnValue(5);
    fixture = fixture = TestBed.createComponent(CounterControllerComponent);
    component = fixture.componentInstance;
    expect(component.getCurrentCount()).toBe(5);
  });

  // Mock's component service's method
  it('should set count to N+1 from N', () => {
    let N:number = 7;
    spyOn(counterService, "getInitialCount").and.returnValue(N);
    fixture = fixture = TestBed.createComponent(CounterControllerComponent);
    component = fixture.componentInstance;
    component.addStepFirst();
    expect(component.getCurrentCount()).toBe(N+1);
  });

  // Mock's component method
  it('should add 1 to currentCount if its set to 0', () => {
    spyOn(component, "getCurrentCount").and.returnValue(0);
    component.addStepFirst();
    expect(component.currentCount).toBe(1);
  });

  it('should add call addStepFirst when 1 is added by emit mode', () => {
    spyOn(component, "addStepFirst").and.callThrough();

    component.getCounterObs().subscribe(() => {
      expect(component.addStepFirst).toHaveBeenCalled();
    });

    component.emitIncrementByOne();

  });

});
