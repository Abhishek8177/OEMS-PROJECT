import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginService } from '../loginService/login.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private loginservice:LoginService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    let authreq = request
    let token =this.loginservice.getToken()

    if(token!=null)
    {
        authreq = authreq.clone({
          setHeaders:{authorization:`Bearer ${token}`}
        })
    }

    return next.handle(authreq);
  }
}
