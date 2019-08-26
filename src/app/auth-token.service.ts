import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import 'rxjs/add/operator/catch';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class AuthTokenService {

  static MethodTypes = {
    GET: 'GET',
  };

  constructor(public router: Router,
    private activatedRoute: ActivatedRoute,
    private http: HttpClient) { }

    getheaders(): HttpHeaders {
      return new HttpHeaders({
          'Content-Type': 'application/json'
      });
  }

  GET_METHOD(url: string, params: any): Observable<any> {
      return this.http.get<any>(url,
          {
              headers: this.getheaders(),
              params,
              responseType: 'json'
          }).pipe(
              map(response => response)
          );
  }
}
