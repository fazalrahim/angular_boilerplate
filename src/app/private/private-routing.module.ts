import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from '@app/private/components/dashboard/dashboard.component';
import { FormPageComponent } from '@app/private/components/form-page/form-page.component';
import { GridPageComponent } from '@app/private/components/grid-page/grid-page.component';
import { ProfileComponent } from '@app/private/components/profile/profile.component';

const routes: Routes = [
  {
    path: '',
    component: ProfileComponent
  },
  {
    path: 'profile',
    component: ProfileComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'grid',
    component: GridPageComponent
  },
  {
    path: 'form',
    component: FormPageComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrivateRoutingModule { }
