import { useContext } from 'react'
import { ShopContext } from '../context'



function BasketItem(props) {
    const {id, name, price, quantity } = props;
    

    const { orderRemove, orderSub, orderAdd } = useContext(ShopContext)
    
    
    return <li className="collection-item basket-item">{name} x <i className="material-icons add-sub" onClick={() => orderAdd(id)}>add</i> {quantity} <i className="material-icons add-sub" onClick={() => orderSub(id)}>remove</i> pieces = {price*quantity} PLN
        <span className="secondary-content"><i className="material-icons basket-delete" onClick={() => orderRemove(id)}>close</i></span>
    </li>
}
export {BasketItem}