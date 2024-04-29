import { Component } from '@angular/core';
import { CounterService } from '../counter-services/counter.service';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Subscription } from 'rxjs/internal/Subscription';
import { skip } from 'rxjs';

@Component({
  selector: 'app-counter-controller',
  templateUrl: './counter-controller.component.html',
  styleUrls: ['./counter-controller.component.scss']
})
export class CounterControllerComponent {
  
  public currentCount: number;
  public countSubject: BehaviorSubject<number>;
  public countSubscription: Subscription;

  constructor(public counterService: CounterService) {
    this.currentCount = counterService.getInitialCount();
    this.countSubject = new BehaviorSubject<number>(this.currentCount);

    this.countSubscription = this.getCounterObs().subscribe(count => {
      this.addStepFirst();
    });
  }

  public getCounterObs() {
    return this.countSubject.pipe(skip(1));
  }

  getCurrentCount(): number {
    return this.currentCount;
  }

  addStepFirst() {
    this.currentCount = this.getCurrentCount() + 1;
  }

  addStepSecond() {
    this.addStepFirst();
    this.addStepFirst();
  }

  addStepThird() {
    this.addStepFirst();
    this.addStepSecond();
  }

  emitIncrementByOne() {
    this.countSubject.next(1);
  }

}
