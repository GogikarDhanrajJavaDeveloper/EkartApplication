import { ProductsLoading, ProductsLoadingSuccess, ProductsLoadingFail } from '../actions/detail.action';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { productDetailService } from '../service/detail.service';
import * as allActions from '../index';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { Action } from '@ngrx/store';
import { Product } from '../model/detail.model';
@Injectable({
    providedIn: 'root'
})

export class detailEffects {
        constructor(private service: productDetailService,
                    private action: Actions){}


@Effect()
public getOneProduct: Observable<Action> = this.action.pipe(ofType(allActions.DetailAction.ProductsLoading),
    mergeMap((action: any) => { return this.service.getOneProduct(action.id).pipe(map((posRes: Product) => {
        return new allActions.ProductsLoadingSuccess(posRes);
    }), catchError((error: string) => { return  of(new ProductsLoadingFail('Network Error'));
        }))
    })
    )
};