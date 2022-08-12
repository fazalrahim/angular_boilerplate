import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

import { PublicEndpoints } from '@app/shared/public-endpoints/public-endpoints';
import { BaseService } from '@app/shared/services/base/base.service';
import { LoginModal } from '@app/public';

@Injectable({
  providedIn: 'root'
})
export class PublicService extends BaseService {

  constructor(httpClient: HttpClient) {
    super(httpClient);
  }

  login(loginModal: LoginModal): Observable<any> {
    // return this.post<LoginModal>(PublicEndpoints.loginEndPoint, loginModal);
    const response = new BehaviorSubject<boolean>(false);
    if (loginModal.username === 'fazal' && loginModal.password === '3') response.next(true);
    return response;
  }

     /**
     * Get calling for testing
     */

  getCoinInfo() {
    const tempAPIEndPoint = 'https://api.coindesk.com/v1/bpi/currentprice.json';
    return this.get(tempAPIEndPoint);
  }

}
