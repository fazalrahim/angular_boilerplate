import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { AuthGuard } from '@app/core/guards/auth.guard';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private authUser = new BehaviorSubject<boolean>(false);
  constructor(private router: Router) { }

  get getAuthStatus() {
    return this.authUser.value;
  }

  setAuthService(value: boolean) {
    this.authUser.next(value);
  }

  redirectUser() {
    return this.router.navigate(['private']);
  }

  addPrivateModule() {
    const currentConfig = this.router.config;
    const privateRoute: any = currentConfig.find(x => x.path === 'private');
    // canActivate: [AuthGuard]

    if (!privateRoute) {
      const errorRoute: any = currentConfig.find(x => x.path === '**');
      currentConfig[(this.router.config.length - 1)] = {
        path: 'private',
        loadChildren: () => import('@app/private/private.module').then(m => m.PrivateModule)
      }
      currentConfig.push(errorRoute);
      this.router.resetConfig(currentConfig);
    }
  }

}
