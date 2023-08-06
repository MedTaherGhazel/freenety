import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-signup-freelancer',
  standalone: true,
  imports: [CommonModule],
  template: `
      <a href=""><h1>Freenety</h1></a>
     <div class="wrapper">
  <div class="rec-prism">
    <div class="face face-front">
      <div class="content">
        <h1>Sign up to here a talent
        </h1>
        <form onsubmit="event.preventDefault()">
        <div class="field-wrapper">
  <div class="fullname">
    <input type="text" name="firstname" placeholder=" ">
    <label class="name-label">First Name</label>
    <input type="text" name="lastname" placeholder=" ">
    <label class="last-label">Last Name</label>
  </div>
</div>
<div class="field-wrapper">
            <input type="text" name="company" placeholder="company">
            <label>Company/Organisation name</label>
          </div>
<div class="field-wrapper">
            <input type="email" name="email" placeholder="email">
            <label>Work email adress</label>
          </div>

<div class="field-wrapper">
            <input type="number" name="phone" placeholder="phone">
            <label>Phone number</label>
          </div>
          <div class="field-wrapper">
            <input type="password" name="password" placeholder="password" autocomplete="new-password">
            <label>Password</label>
          </div>
          <div class="field-wrapper">
            <input type="password" name="password" placeholder="password" autocomplete="new-password">
            <label>Confirm password</label>
          </div>
          <div class="field-wrapper">
            <button type="submit">Create account</button>

          </div>
          <span class="psw" onclick="showForgotPassword()">Forgot Password?   </span>
          <span class="signup" onclick="showSignup()">Not a user?  Sign up</span>
        </form>
      </div>
    </div>
    </div>
  </div>
  `,
  styleUrls: ['./signup-freelancer.component.scss']
})
export class SignupFreelancerComponent {

}
