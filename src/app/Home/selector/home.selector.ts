import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IState } from '../reducer/home.reducer';

export const allProducts = createSelector(createFeatureSelector<IState>('home'), (state: IState)=>{
    return state;
})