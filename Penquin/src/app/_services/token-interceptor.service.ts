import { Injectable, Injector } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpRequest, HttpHandler } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable()
export class TokenInterceptorService implements HttpInterceptor {

  private authService: AuthService;

  constructor(
    private injector: Injector
  ) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.authService = this.injector.get(AuthService); // get it here within intercept
    if (this.authService.loggedIn()) {
      const authRequest = request.clone({
        headers: request.headers.set('Authorization', this.authService.getToken())
      });
      return next.handle(authRequest);
    }
    else {
      const authRequest = request.clone({});
      return next.handle(authRequest);
    }
  }
}