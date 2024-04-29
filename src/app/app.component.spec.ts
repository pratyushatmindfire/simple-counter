import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { CounterControllerComponent } from './counter-controller/counter-controller.component';
import { CounterService } from './counter-services/counter.service';

describe('AppComponent', () => {
  beforeEach(() => TestBed.configureTestingModule({
    declarations: [
      AppComponent,
      CounterControllerComponent
    ],
    providers: [
      CounterService
    ]
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
