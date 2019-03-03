import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AddprofileComponent } from './addprofile/addprofile.component';
import { CustomplotComponent } from './customplot/customplot.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { PlotareaComponent } from './plotarea/plotarea.component';
import { DashsettingComponent } from './dashsetting/dashsetting.component';
import { BusrulzComponent } from './busrulz/busrulz.component';

const routes: Routes = [
	{ path: '', component: HomeComponent },
	{ path: 'addprofile', component: AddprofileComponent },
	{ path: 'customplot', component: CustomplotComponent },
	{ path: 'login', component: LoginComponent },
	{ path: 'dashboard', component: PlotareaComponent },
	{ path: 'signup', component: SignupComponent },
	{ path: 'dashsetting', component: DashsettingComponent },
	{ path: 'businessrule', component: BusrulzComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
