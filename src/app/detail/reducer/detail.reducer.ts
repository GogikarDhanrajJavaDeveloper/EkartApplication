import { InitialState } from '@ngrx/store/src/models';
import { Product } from '../model/detail.model';
import { ProductActionTypes } from '../actions/detail.action';
import * as allAction from '../.';

export interface IState {
    loading: boolean;
    products: Product;
    error: string;
}

const InitialState: IState = {
    loading: false,
    products: {
        _id: '',
        image: '',
        name: '',
        brand: '',
        price: 0,
        rating: 0.0,
        description: '',
        countInStock: 0
    },
    error: ''
}

export function DetailReducer(state= InitialState, action: ProductActionTypes): IState {
        switch(action.type){
            case allAction.DetailAction.ProductsLoading :
               return{
                 ...state,
                loading: false,
                products: {
                    _id: '',
                    image: '',
                    name: '',
                    brand: '',
                    price: 0,
                    rating: 0.0,
                    description: '',
                    countInStock: 0
                },
                error: ''
            }
            case allAction.DetailAction.ProductsLoadingSuccess : 
                return {
                    ...state,
                    loading: true,
                    products: action.product,
                    error: ''
                }
            case allAction.DetailAction.ProductsLoadingFail :
                return {
                    ...state,
                    loading: true,
                    products: {
                        _id: '',
                        image: '',
                        name: '',
                        brand: '',
                        price: 0,
                        rating: 0.0,
                        description: '',
                        countInStock: 0
                    },
                    error: action.error
                }
        }
}