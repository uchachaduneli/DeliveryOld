import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpErrorResponse
} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {retry, catchError} from 'rxjs/operators';
import {NotificationService} from "./notification.service";
import {Injectable} from "@angular/core";

@Injectable({providedIn: 'root'})
export class HttpErrorInterceptor implements HttpInterceptor {

  constructor(private notifyService: NotificationService) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      retry(1),
      catchError((error: HttpErrorResponse) => {
        let errorMessage = '';
        if (error.error instanceof ErrorEvent) {// client-side error
          errorMessage = `Error: ${error.error.message}`;
        } else {// server-side error
          errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
        }
        console.log(error);
        this.notifyService.showError(errorMessage, 'Ups Somthing Went Wrong :(');
        return throwError(errorMessage);
      })
    );
  }
}
