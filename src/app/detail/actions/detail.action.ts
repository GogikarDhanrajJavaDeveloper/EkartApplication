import {Product } from '../model/detail.model';
import { Action } from '@ngrx/store';

export enum DetailAction {
    ProductsLoading = '[Product] Loading',
    ProductsLoadingSuccess = '[Product] Loading Success',
    ProductsLoadingFail = '[Product] Loading Fail',
}

export class ProductsLoading implements Action {
    public readonly type = DetailAction.ProductsLoading;
    constructor(public id: any){}
}

export class ProductsLoadingSuccess implements Action {
    public readonly type = DetailAction.ProductsLoadingSuccess;
    constructor(public product: Product ){}
}

export class ProductsLoadingFail implements Action {
    public readonly type = DetailAction.ProductsLoadingFail;
    constructor(public error: string ){}
}

export type ProductActionTypes = ProductsLoading | ProductsLoadingSuccess | ProductsLoadingFail ;
