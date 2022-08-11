import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrivateRoutingModule } from '@app/private/private-routing.module';
import { DashboardComponent } from '@app/private/components/dashboard/dashboard.component';
import { GridPageComponent } from '@app/private/components/grid-page/grid-page.component';
import { ProfileComponent } from '@app/private/components/profile/profile.component';
import { FormPageComponent } from '@app/private/components/form-page/form-page.component';


@NgModule({
  declarations: [
    DashboardComponent,
    GridPageComponent,
    ProfileComponent,
    FormPageComponent
  ],
  imports: [
    CommonModule,
    PrivateRoutingModule
  ]
})
export class PrivateModule { }
