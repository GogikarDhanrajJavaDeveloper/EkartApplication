import { Action } from '@ngrx/store';
import { Product } from '../model/product.model';

export enum HomeAction {
    ProductsLoading = '[Product] loading',
    ProductsLoadingSuccess = '[Product] loading Success',
    ProductsLoadingFail = '[Product] loading Fail',

}

export class ProductsLoading implements Action {
    public readonly type = HomeAction.ProductsLoading;
}

export class ProductsLoadingSuccess implements Action {
    public readonly type = HomeAction.ProductsLoadingSuccess;
    constructor(public products: Product[] ){}
}

export class ProductsLoadingFail implements Action {
    public readonly type = HomeAction.ProductsLoadingFail;
    constructor(public error: string){}
}

export type HomeActionTypes = ProductsLoading | ProductsLoadingSuccess | ProductsLoadingFail ;


