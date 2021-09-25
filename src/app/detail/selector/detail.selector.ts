import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IState } from '../reducer/detail.reducer';

export const allProduct = createSelector(createFeatureSelector<IState>('detail'), (state: IState) => {
    return state;
})