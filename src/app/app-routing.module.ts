import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorPageComponent } from '@app/public/components/error-page/error-page.component';

const routes: Routes = [
  { path: '', redirectTo: 'public', pathMatch: 'full' },
  {
    path: 'public',
    loadChildren: () => import('@app/public/public.module').then(m => m.PublicModule)
  },
  {
    path: 'private',
    loadChildren: () => import('@app/private/private.module').then(m => m.PrivateModule)
  },
  { path: '**', component: ErrorPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
