import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { delay, finalize } from 'rxjs/operators';
import { LoadingService } from "./loading.service"; 

@Injectable()
export class AuthInterceptorService implements HttpInterceptor{
    constructor(private loadingService: LoadingService){}
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
        this.loadingService.showLoading();
        console.log("loading");
        return next.handle(req).pipe(delay(3000),
            finalize(() => {
                this.loadingService.hideLoading();
              })
        );
    }
}