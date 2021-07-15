import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HeaderInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    request = request.clone({
      setHeaders:{
        'x-rapidapi-key':'259404e3femsh7375ac86cbd7936p18e47cjsn6fc6a5420713',
        'x-rapidapi-host':'movie-database-imdb-alternative.p.rapidapi.com'
      }
    })
    return next.handle(request);
  }
}
