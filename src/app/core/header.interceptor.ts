import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class HeaderInterceptor implements HttpInterceptor {

  constructor() { }
  private get baseUrl() {
    return environment.baseUrl;
  }
  private get apiKey() {
    return environment.api_key;
  }
  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    request = request.clone({
      url: this.baseUrl + request.url + `?api_key=${this.apiKey}`,
    });
    return next.handle(request);
  }
}
