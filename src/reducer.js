export function reducer(state, {type, payload}) {
    switch (type) {
        case 'SET_GOODS':
            return {
                ...state,
                goods: payload || [],
                loading: false
            }
        case 'CLOSE_ALERT':
            return {
                ...state,
                alertName: ''
            }
        case 'ORDER_REMOVE':
            return {
                ...state,
                order: state.order.filter(item => item.id !== payload.id)
            }
        case 'ORDER_SUB':{
            let index1 = state.order.findIndex(item => (item.id === payload.id))
            if (state.order[index1].quantity === 1) {
                return {
                    ...state,
                    order: state.order.filter(item => item.id !== payload.id)
                }
            } else {
                return {
                    ...state,
                    order: state.order.map(el => {
                        if(el.id === payload.id) {
                            const newQuantity = el.quantity - 1
                            return {
                                ...el,
                                quantity: newQuantity
                            }
                        } else {
                            return el
                        }
                    })
                }
            }
        }
        case 'ORDER_ADD':
            return {
                ...state,
                order: state.order.map(el => {
                    if(el.id === payload.id) {
                        const newQuantity = el.quantity + 1
                        return {
                            ...el,
                            quantity: newQuantity
                        }
                    } else {
                        return el
                    }
                })
            }
        
        case 'ORDER_ADD_TO_BASKET':{
            let newOrder = []
            let ind = state.order.findIndex(el => (el.id === payload.id))
            if (ind < 0) {
                    newOrder = [...state.order, {...payload, quantity: 1}]
            } else {
                newOrder = state.order.map((el, i) => {
                    if(i === ind) {
                        const newQuantity = el.quantity + 1
                        return {
                            ...el,
                            quantity: newQuantity
                        }
                    } else {
                        return el
                    }
                })
            }
            return {
                ...state,
                order: newOrder,
                alertName: payload.name
            }
        }
        case 'BASKET_SHOW_HANDLER':
            return {
                ...state,
                isBasketShow: !state.isBasketShow
            }

                
        default:
            return {...state};
    }
}



