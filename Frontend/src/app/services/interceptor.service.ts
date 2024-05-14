import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { StorageService } from '../helpers/storage.service';
import { AuthService } from '../helpers/auth.service';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {

  constructor(private storageService: StorageService, private authService: AuthService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {


    let token = null;
    let reqInterceptor = null;

    if (this.storageService.isLoggedIn()) {
      token = this.storageService.getUser().token;
    }

    if (token !== null) {
      reqInterceptor = req.clone(
        {
          setHeaders: {
            'Content-Type': 'application/json; charset=utf-8',
            'Accept': 'application/json',
            'authorization': `Bearer ${token}`,
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Credentials': 'true',
            'Access-Control-Allow-Headers': 'origin, content-type, accept, authorization',
            'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS, HEAD'
          }
        });
    }
    else {

      reqInterceptor = req.clone(
        {
          setHeaders: {
            'Content-Type': 'application/json; charset=utf-8',
            'Accept': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Credentials': 'true',
            'Access-Control-Allow-Headers': 'origin, content-type, accept, authorization',
            'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS, HEAD'
          }
        });
    }

    return next.handle(reqInterceptor).pipe(catchError(err => {
      console.log();
      if (([0].includes(err.status)) && (this.storageService.isLoggedIn())) {
        this.storageService.removeUser();
      }

      const error = err.error?.message || err.statusText;
      return throwError(() => error);

    }));
  }



}
