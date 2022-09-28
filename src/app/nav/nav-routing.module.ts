import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from '@app/core/guards/auth.guard';
import { NavComponent } from '@app/nav/component/nav.component';

const privateChildren = [
  {
    path: 'private',
    loadChildren: () => import('@app/private/private.module').then(m => m.PrivateModule)
  }
];

const routes: Routes = [
  {
    path: '',
    redirectTo: '/app/private',
    pathMatch: 'full'
  },
  {
    path: '',
    component: NavComponent,
    children: [...privateChildren],
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NavRoutingModule { }
