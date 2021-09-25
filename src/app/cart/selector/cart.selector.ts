import { createSelector, createFeatureSelector } from '@ngrx/store';
import CartInterface from '../reducer/cart.reducer';

export const cartSelector = createSelector( createFeatureSelector<CartInterface>("cart"), (state: CartInterface) => {
                        return state;
                    })