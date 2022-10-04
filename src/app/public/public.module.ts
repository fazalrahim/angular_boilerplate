import { NgModule } from '@angular/core';

import { PublicRoutingModule } from './public-routing.module';
import { PublicComponent } from './public.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { ErrorPageComponent } from './components/error-page/error-page.component';
import { PublicSharedModule } from '@app/shared/public-modules/public-shared.module';


@NgModule({
  declarations: [
    PublicComponent,
    LoginComponent,
    RegistrationComponent,
    LandingPageComponent,
    ErrorPageComponent
  ],
  imports: [
    PublicRoutingModule,
    PublicSharedModule
  ]
})
export class PublicModule { }
