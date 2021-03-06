import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApplicationListComponent } from './component/application-list/application-list.component';
import { CreateappComponent } from './component/createapp/createapp.component';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/login/login.component';
import { NotFoundComponent } from './component/not-found/not-found.component';
import { ProfileComponent } from './component/profile/profile.component';
import { SignupComponent } from './component/signup/signup.component';
import { SingleappComponent } from './component/singleapp/singleapp.component';
import { UpdateAppComponent } from './component/update-app/update-app.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'profile', component:  ProfileComponent},
  { path: 'logout', component:  HomeComponent},
  { path: 'createapp', component:  CreateappComponent},
  { path: 'application', component:  ApplicationListComponent},
  { path: 'application/:appid', component:  SingleappComponent},
  { path: 'application/:appid/update', component: UpdateAppComponent},
  { path: '**', component: NotFoundComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
