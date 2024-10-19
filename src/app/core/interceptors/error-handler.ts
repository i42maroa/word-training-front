import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { NotificationService } from '../services/notification/notification.service';


@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(private notificationService: NotificationService) {}

  intercept(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
      return next.handle(req)
        .pipe(catchError((error:HttpErrorResponse) => {
          let errorMessage = "";
          if(error.error instanceof ErrorEvent){
            errorMessage = "Error " + error.error.message
          }
          this.notificationService.showErrorMessage('error');
          return throwError(()=> errorMessage)
      })
    );
  }
}



// intercept(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

//   return  next.handle(req).pipe(catchError((error:HttpErrorResponse) => {

//     let errorMessage = "";
//     console.log("erro")
//     if(error.error instanceof ErrorEvent){
//       errorMessage = "Error " + error.error.message
//     }else{
//       if (error) {
//         switch (error.status) {
//           case 400:
//             break;
//           case 401:
//             break;
//           default:
//             break;
//         }
//       errorMessage = "Error code " + error.status + ", message: " + error.message
//       }
//    }
//    this.notificationService.showErrorMessage(errorMessage);
//       return throwError(()=> errorMessage)
//   }));

// }
