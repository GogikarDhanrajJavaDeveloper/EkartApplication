import { Observable } from 'rxjs';
import { HttpHandler, HttpRequest, HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class detailIntreceptor {
    intercept(req: HttpRequest<any>, handler: HttpHandler): Observable<HttpEvent<any>>{
        const req1 = req.clone({
            setHeaders: {
                ' token ' : 'ashokit'
            }
        })
        return handler.handle(req1);
    }
}