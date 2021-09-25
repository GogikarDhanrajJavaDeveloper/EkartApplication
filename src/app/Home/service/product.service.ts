import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../model/product.model';
import { environment } from '../../../environments/environment';

@Injectable({
    providedIn: "root"
})

export class productService {
        constructor(private http: HttpClient){
            console.log(environment.baseURL);
        }

    public getProducts(): Observable<Product[]>{
       return this.http.get<Product[]>(environment.baseURL+"/api/products");
    //    return this.http.get<Product[]>(`http://localhost:9090/product/all`);
    }
};