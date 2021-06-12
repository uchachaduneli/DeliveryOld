import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpErrorResponse
} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {retry, catchError} from 'rxjs/operators';
import {NotificationService} from "../services/notification.service";
import {Injectable} from "@angular/core";
import {AuthenticationService} from "../services/authentication.service";

@Injectable({providedIn: 'root'})
export class HttpErrorInterceptor implements HttpInterceptor {

  constructor(private notifyService: NotificationService, private authenticationService: AuthenticationService) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(catchError(err => {
      let errorMessage = '';
      if ([401, 403].indexOf(err.status) !== -1) {
        // auto logout if 401 Unauthorized or 403 Forbidden response returned from api
        this.authenticationService.logout();
        location.reload();
      }
      if (err.error instanceof ErrorEvent) {// client-side error
        errorMessage = `Error: ${err.error.message}`;
      } else {// server-side error
        errorMessage = `Error Code: ${err.status}\nMessage: ${err.message}`;
      }
      console.log(err);
      this.notifyService.showError(errorMessage, 'Ups Somthing Went Wrong :(');
      return throwError(errorMessage);
    }));
  }

  // intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
  //   return next.handle(request).pipe(
  //     retry(1),
  //     catchError((error: HttpErrorResponse) => {
  //       let errorMessage = '';
  //       if (error.error instanceof ErrorEvent) {// client-side error
  //         errorMessage = `Error: ${error.error.message}`;
  //       } else {// server-side error
  //         errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
  //       }
  //       console.log(error);
  //       this.notifyService.showError(errorMessage, 'Ups Somthing Went Wrong :(');
  //       return throwError(errorMessage);
  //     })
  //   );
  // }
}
