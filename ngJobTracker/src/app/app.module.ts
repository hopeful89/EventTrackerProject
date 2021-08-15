import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApplicationService } from './services/application.service';
import { AuthService } from './services/auth.service';
import { ApplicationListComponent } from './component/application-list/application-list.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/login/login.component';
import { NotFoundComponent } from './component/not-found/not-found.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { SignupComponent } from './component/signup/signup.component';
import { ProfileComponent } from './component/profile/profile.component';
import { LogoutComponent } from './component/logout/logout.component';
import { MenutoggleService } from './services/menutoggle.service';
import { CreateappComponent } from './component/createapp/createapp.component';


@NgModule({
  declarations: [
    AppComponent,
    ApplicationListComponent,
    HomeComponent,
    LoginComponent,
    NotFoundComponent,
    NavbarComponent,
    SignupComponent,
    ProfileComponent,
    LogoutComponent,
    CreateappComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
  ],
  providers: [
    ApplicationService,
    AuthService,
    MenutoggleService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
