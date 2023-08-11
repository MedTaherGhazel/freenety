import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule],
  template: `

<a href=""><img src="../../assets/images/freenety.png" alt=""></a>
<h1>Are you Freenetix or Freeneter ?</h1>
<div class="cards">
  <label class="card">
    <input name="plan" class="radio" type="radio" id="client" (change)="onSelectionChange($event)">
    <img src="../../assets/images/client.png" alt="..." class="card-img-top">
    <div class="card-body">
      <h2 class="card-title">I'm client, hiring for a project</h2>
    </div>
  </label>
  <label class="card">
    <input name="plan" class="radio" type="radio" id="freelancer" (change)="onSelectionChange($event)">
    <img src="../../assets/images/freelancer.png" alt="..." class="card-img-top">
    <div class="card-body">
      <h2 class="card-title">I'm a freelancer, looking for work</h2>
    </div>
  </label>
  <div class="field-wrapper">
    <button [disabled]="!selectedOption" (click)="redirectToSignup()">{{ createAccountButtonText }}</button>
  </div>

</div>

  `,
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  selectedOption: string = '';
  createAccountButtonText: string = 'select your role';
  constructor(private router: Router) {}

  onSelectionChange(event: any) {
    this.selectedOption = event.target.id;
    this.createAccountButtonText = `Create account as ${this.selectedOption}`;
  }
    onFreelancerSelected() {
      this.selectedOption = 'freelancer';
    }

    onClientSelected() {
      this.selectedOption = 'client';
    }

    redirectToSignup() {
      if (this.selectedOption === 'freelancer') {
        this.router.navigate(['/signup-freelancer']);
      } else if (this.selectedOption === 'client') {
        this.router.navigate(['/signup-client']);
      }
    }
  }