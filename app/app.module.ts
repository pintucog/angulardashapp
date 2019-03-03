import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlotareaComponent } from './plotarea/plotarea.component';
import { RowstatsComponent } from './rowstats/rowstats.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CustomplotComponent } from './customplot/customplot.component';
import { SignupComponent } from './signup/signup.component';
import { DashsettingComponent } from './dashsetting/dashsetting.component';
import { HomeComponent } from './home/home.component';
import { AddprofileComponent } from './addprofile/addprofile.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { UserService } from './user.service';
import { BusrulzComponent } from './busrulz/busrulz.component';

@NgModule({
  declarations: [
    AppComponent,
    PlotareaComponent,
    RowstatsComponent,
    LoginComponent,
    NavbarComponent,
    CustomplotComponent,
    SignupComponent,
    DashsettingComponent,
    HomeComponent,
    AddprofileComponent,
    BusrulzComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
