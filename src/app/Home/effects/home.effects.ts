import { ProductsLoadingSuccess, ProductsLoadingFail, HomeAction } from './../actions/home.actions';
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import * as allActions from '../.';
import { productService } from '../service/product.service';
import { catchError, mergeMap,map } from "rxjs/operators";
import { Product } from '../model/product.model';


@Injectable({
    providedIn:"root"
})

export class HomeEffects {
    constructor(private service:productService,
                private action:Actions){}

    @Effect()
    public getProducts:Observable<Action> = this.action.pipe(ofType(allActions.HomeAction.ProductsLoading),
                mergeMap(()=> this.service.getProducts().pipe(map((posRes:Product[])=>{
                    return new allActions.ProductsLoadingSuccess(posRes)
                }), catchError((error)=> of(new ProductsLoadingFail('Network Error'))))))
}
