import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,
            RouterLink],
  template: `

<link href="https://fonts.googleapis.com/css?family=Arvo&display=swap" rel="stylesheet">

<nav role="navigation" class="primary-navigation">
  <ul>
    <li><a href="#">About us</a></li>
    <li><a href="#">Contact</a></li>
    <li><img src="../../assets/images/freenety.png" alt="free" height="50"></li>
    <li><a [routerLink]='["/signin"]'>Login</a></li>
    <li><a [routerLink]='["/signup"]'>Sign up</a></li>
  </ul>
</nav>


<!-- <div class="card">
  <img src="../../assets/images/ag.png" alt="Avatar" >
  <div class="container">
    <h4><b>John Doe</b></h4>
    <p>Architect & Engineer</p>
  </div>
</div> -->

<div class="blog-card">
    <div class="meta">
      <div class="photo"><img src="../../assets/images/ag.png" alt=""></div>
      <!-- <ul class="details">
        <li class="author"><a href="#">John Doe</a></li>
        <li class="date">Aug. 24, 2015</li>
        <li class="tags">

        </li>
      </ul> -->
    </div>
    <div class="description">
      <br>
      <h1>Your gateway to creative collaboration and professional success.</h1>
      <p>Freenety, the freelance platform that connects talents from around the world to exciting projects. Find the best freelancers or discover career opportunities</p>
      <p class="read-more">
       <button>Join now</button>
      </p>
    </div>
  </div>
  <div class="blog-card alt">
    <div class="meta">
      <div class="photo"><img src="../../assets/images/money.png" alt=""></div>
    </div>
    <div class="description">
      <h1>Earn money and increase your income in convertible coins.</h1>
<p>showcase your skills and land relevant projects, join now for financial success and digital value!</p>
      <p class="read-more">
        <a href="#">Read More</a>
      </p>
    </div>
  </div>

  <!--FONT AWESOME-->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

<!--GOOGLE FONTS-->
<link rel="preconnect" href="https://fonts.gstatic.com">
<link href="https://fonts.googleapis.com/css2?family=Fredoka+One&family=Play&display=swap" rel="stylesheet">

<footer>
<div class="footer">
<div class="row">
<a href="#"><i class="fa fa-facebook"></i></a>
<a href="#"><i class="fa fa-instagram"></i></a>
<a href="#"><i class="fa fa-youtube"></i></a>
<a href="#"><i class="fa fa-twitter"></i></a>
</div>

<div class="row">
<ul>
<li><a href="#">Contact us</a></li>
<li><a href="#">Our Services</a></li>
<li><a href="#">Privacy Policy</a></li>
<li><a href="#">Terms & Conditions</a></li>
<li><a href="#">Career</a></li>
</ul>
</div>

<div class="row">
INFERNO Copyright © 2021 Inferno - All rights reserved || Designed By: Mahesh
</div>
</div>
</footer>
`,
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  constructor() { }

  imageUrl = '/src/assets/images/freenety.png';
}
