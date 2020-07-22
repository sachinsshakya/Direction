import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { PhysicsComponent } from './physics/physics.component';
import { ChemistryComponent } from './chemistry/chemistry.component';
import { BiologyComponent } from './biology/biology.component';
import { AdvanceScienceComponent } from './advance-science/advance-science.component';
import { LawsphysicsComponent } from './lawsphysics/lawsphysics.component';
import { LoginLayoutComponent } from './login-layout/login-layout.component';
import { HomeLayoutComponent } from './home-layout/home-layout.component';
import { AuthGuard } from './auth.guard';
import { ContactComponent } from './contact/contact.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  {
    path: '',
    component: LoginLayoutComponent,
    children: [
      {path: '',component: LoginComponent},
      {path: 'login',component: LoginComponent},
      { path:'register', component:RegisterComponent},
    ]
  },
  {
    path: '',
    component: HomeLayoutComponent,
    children: [
      { path: '', component: HomeComponent,canActivate: [AuthGuard]},
      { path:'home', component:HomeComponent,canActivate: [AuthGuard]},
      { path:'physics',component:PhysicsComponent,canActivate: [AuthGuard]},
      { path:'chemistry', component:ChemistryComponent,canActivate: [AuthGuard]},
      { path:'biology', component:BiologyComponent,canActivate: [AuthGuard]},
      { path:'advance', component:AdvanceScienceComponent,canActivate: [AuthGuard]},
      { path:'logout', redirectTo:'/login'},
      { path:'contact', component:ContactComponent, canActivate: [AuthGuard] },
      { path:'profile', component:ProfileComponent, canActivate: [AuthGuard] }
    ]
  }, 
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponent = [RegisterComponent, HomeComponent, PhysicsComponent,
  AdvanceScienceComponent,BiologyComponent,ChemistryComponent,LoginComponent,ContactComponent,ProfileComponent]