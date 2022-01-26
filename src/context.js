import { createContext, useReducer } from "react";
import { reducer } from './reducer'

export const ShopContext = createContext();

const initialState = {
    goods: [],
    loading: true,
    order: [],
    isBasketShow: false,
    alertName: '',
};

export const ContextProvider =({children}) => {
    const [value, dispatch] = useReducer(reducer, initialState)
    value.closeAlert = () => {
        dispatch({type: 'CLOSE_ALERT'})
    };
    value.orderRemove = (id) => {
        dispatch({
            type: 'ORDER_REMOVE',
            payload: {id: id}})
    };
    value.orderSub = (id) => {
        dispatch({
            type: 'ORDER_SUB',
            payload: {id: id}
        })
    };
    value.orderAdd = (id) => {
        dispatch({
            type: 'ORDER_ADD',
            payload: {id: id}
        })
    };
    value.orderAddToBasket = (item) => {
        dispatch({
            type: 'ORDER_ADD_TO_BASKET',
            payload: item
        })
    };
    value.busketShowHandler = () => {
        dispatch({type: 'BASKET_SHOW_HANDLER'})
    }
    value.setGoods = (data) => {
        dispatch({
            type: 'SET_GOODS',
            payload: data
        })
    }


    return <ShopContext.Provider value={value}>
        {children}
    </ShopContext.Provider>
}