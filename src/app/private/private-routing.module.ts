import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from '@app/core/guards/auth.guard';
import { DashboardComponent } from '@app/private/components/dashboard/dashboard.component';
import { FormPageComponent } from '@app/private/components/form-page/form-page.component';
import { GridPageComponent } from '@app/private/components/grid-page/grid-page.component';
import { ProfileComponent } from '@app/private/components/profile/profile.component';

const routes: Routes = [
  {
    path: '',
    component: ProfileComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'dashboards',
    component: DashboardComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'grid',
    component: GridPageComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'form',
    component: FormPageComponent,
    canActivate: [AuthGuard]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrivateRoutingModule { }
