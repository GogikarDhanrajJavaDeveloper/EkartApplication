import { Observable } from 'rxjs';
import { HttpEvent, HttpHandler, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: "root"
})

export class productIntreceptor {
    intercept(req:HttpRequest<any>, handler:HttpHandler):Observable<HttpEvent<any>>{
        const req1 = req.clone({
            setHeaders: {
                "token":"ashokit"
            }
        })
        return handler.handle(req1);
    }
}