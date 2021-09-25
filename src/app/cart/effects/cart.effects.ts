import { catchError, mergeMap, map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { CartService } from '../service/cart.service';
import { Actions, Effect, ofType } from '@ngrx/effects';
import * as allActions from '../index';
import { Observable, of } from 'rxjs';
import { Action, select, Store } from '@ngrx/store';
import CartInterface from '../reducer/cart.reducer';
import { cartSelector } from '../selector/cart.selector';

@Injectable({
    providedIn: 'root'
})

export class CartEffects {

    constructor(private service: CartService,
                private action: Actions,
                private store: Store<CartInterface>){

                }

    @Effect()
    public getCartItem: Observable<Action> = this.action.pipe(ofType(allActions.CartActions.CartLoading),
    mergeMap((action: any) => this.service.getCartDate(action.qty).pipe(map((posRes) => {
        posRes['qty'] = action.id;
        const result = this.store.pipe(select(allActions.cartSelector));
        result.subscribe((res) => {
            window.localStorage.setItem( 'cart', JSON.stringify(res.finalItems));
        })
        return new allActions.CartLoadingSuccess(posRes);
    }), catchError((error: any) => {
        return of(new allActions.CartLoadingFail('Network Error'))
    })))
    );

    @Effect()
    public removeItem = this.action.pipe(ofType('[Cart] Remove Item'),
        map((id: any) => ({ type: '[Cart] Remove Item', 'id ': id}))
        );
};