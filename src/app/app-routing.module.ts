import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { HomeComponent } from './home/home.component';
import { SigninComponent } from './auth/signup/signin.component';
import { SigninTalentComponent } from './auth/signup-talent/signin-talent.component';
import { SigninClientComponent } from './auth/signup-client/signin-client.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SearchComponent } from './search/search.component';
import { FooterComponent } from './footer/footer.component';

const routes: Routes = [
  { path: '', component: HomeComponent ,title: 'Home page'},
  { path: 'login', component: LoginComponent },
  { path: 'navbar', component: NavbarComponent },
  { path: 'search', component: SearchComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'signin-talent', component:SigninTalentComponent},
  { path: 'signin-client', component:SigninClientComponent},
  { path: 'app-footer', component:FooterComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
