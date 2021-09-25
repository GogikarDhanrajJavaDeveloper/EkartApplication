import { CartModel } from '../model/cart.model';
import * as allActions from '../index';

export default interface CartInterface {
    loading: boolean;
    error: any;
    finalItems: CartModel[]
};

let localstorage_data;
let str = window.localStorage.getItem('cart');
if(str === null){
    localstorage_data = [];
}else {
    let arr = JSON.parse(str);
    localstorage_data = arr;
}

const initialState: CartInterface = {
loading: false,
error: '',
finalItems: localstorage_data
};

export const CART_REMOVE_ITEM: string = 'CART_REMOVE_ITEM';
export function cartReducer(state= initialState, action: allActions.cartActionTypes | any): CartInterface{

    switch (action.type){
        case CART_REMOVE_ITEM:
            return {
                ...state,
                finalItems: state.finalItems.filter((element) => { return element._id != action.payload.id} )
            }
            break;
            case allActions.CartLoadingSuccess:
            const item = action.payload;
            let index = state.finalItems.findIndex((element, index) => {
                return element._id === item._id;
            });
            if(index != -1){
                return {
                    ...state,
                    finalItems: state.finalItems.map((obj) => { return obj._id === item._id ? item: obj}),
                    error: '',
                    loading: true
                }
            }else {
                return {
                    ...state,
                    finalItems: [...state.finalItems, item],
                    error: '',
                    loading: true
                }
            }
            break;

            default:
                return state;
    }
}