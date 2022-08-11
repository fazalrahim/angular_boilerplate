import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '@app/public/components/login/login.component';
import { PublicComponent } from '@app/public/public.component';
import { RegistrationComponent } from './components/registration/registration.component';

const routes: Routes = [
  {
    path:'',
    component: PublicComponent
  },
  {
    path:'login',
    component: LoginComponent
  },
  {
    path:'register',
    component: RegistrationComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
