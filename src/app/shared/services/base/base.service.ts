import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export abstract class BaseService {

  constructor(private httpClient: HttpClient) { }

  protected get<T>(url: string): Observable<T> {
    return this.httpClient.get(url)
      .pipe(map(result => result as T));
  }

  protected post<T>(url: string, body: T): Observable<T> {
    return this.httpClient.post(url, body)
      .pipe(map(result => result as T));
  }
}
