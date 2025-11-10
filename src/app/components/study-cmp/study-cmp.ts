import { Component, signal, computed, effect, OnInit, OnDestroy, Injector } from '@angular/core';
import { CommonModule } from '@angular/common';

export class UserProfile {
    isTrial = signal(false);
    isTrialExpired = signal(false);
    interactionCount = signal(0);
    showTrialDuration = computed(() => this.isTrial() && !this.isTrialExpired());

    private trialEffect: any; 
    constructor(private injector: Injector) {
        this.trialEffect = effect(() => {
            if (this.isTrial()) {
                console.log(`EFFECT: Trial activated. Interaction count: ${this.interactionCount()}`);
                
                if (this.isTrialExpired()) {
                    console.log('EFFECT: Trial has now expired!');
                }
            } else {
                console.log('EFFECT: Trial is currently inactive.');
            }
        }, { injector: this.injector });
    }

    activateTrial() {
        this.isTrial.set(true); 
        this.updateCount();     

        setTimeout(() => {
            this.isTrialExpired.set(true);
            this.updateCount(); 
        }, 5000);

        setTimeout(() => {
            this.isTrialExpired.set(false);
             this.isTrial.set(false); 
            this.updateCount(); 
        }, 12000);
    }

    updateCount() {
        this.interactionCount.update(currentCount => currentCount + 1);
    }
}

@Component({
  standalone: true,
  selector: 'app-study-cmp',
  imports: [CommonModule],
  templateUrl: './study-cmp.html',
  styleUrl: './study-cmp.scss'
})
export class StudyCmp implements OnInit, OnDestroy {

  constructor(private injector: Injector) {}
  
  userProfile!: UserProfile;

  ngOnInit() {
    this.userProfile = new UserProfile(this.injector); 
  }
  ngOnDestroy() {
  }

}
