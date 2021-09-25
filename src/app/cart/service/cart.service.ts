import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CartModel } from '../model/cart.model';
import { environment } from '../../../environments/environment';

@Injectable({
    providedIn: 'root'
})

export default class CartService{
    constructor(private http: HttpClient){}

    public getCartDate(id: any): Observable<CartModel> {
        return this.http.get<CartModel>(`http://localhost:8080/products/${id}`);
    }
}