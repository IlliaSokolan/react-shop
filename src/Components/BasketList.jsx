import { BasketItem } from './BasketItem'
import { useContext } from 'react'
import { ShopContext } from '../context'

function BasketList() {
    const { order, busketShowHandler } = useContext(ShopContext)


    const totalPrice = order.reduce((sum, el) => (sum += el.price * el.quantity), 0)

    return <ul className="collection basket-list">
            <li className="collection-item active">Basket</li>
            {order.length ? order.map(el => (
            <BasketItem key={el.id} {...el} />
            )) : <li className="collection-item">Basket is empty</li>}
            <li className="collection-item active">To pay {totalPrice} PLN <button className="secondary-content checkout-btn">Checkout</button></li>
            <i className="material-icons basket-close-cross" onClick={busketShowHandler}>close</i>
        </ul>
}
export {BasketList}