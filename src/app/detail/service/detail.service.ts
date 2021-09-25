import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../model/detail.model';
import { environment } from '../../../environments/environment';

@Injectable({
    providedIn: 'root'
})

export class productDetailService {

    constructor(private http: HttpClient){
        console.log(environment.baseURL);
    }

    public getOneProduct(id: any): Observable<Product>{
        return this.http.get<Product>(environment.baseURL + `/api/products/${id}`);
    }
};