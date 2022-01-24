import { BasketItem } from './BasketItem'

function BasketList(props) {
    const { order = [], busketShowHandler = Function.prototype, orderRemove = Function.prototype, orderAdd = Function.prototype, orderSub = Function.prototype } = props;


    const totalPrice = order.reduce((sum, el) => (sum += el.price * el.quantity), 0)

    return <ul className="collection basket-list">
            <li className="collection-item active">Basket</li>
            {order.length ? order.map(item => (
            <BasketItem key={item.id} {...item} orderRemove={orderRemove}  orderAdd={orderAdd} orderSub={orderSub}/>
            )) : <li className="collection-item">Basket is empty</li>}
            <li className="collection-item active">To pay {totalPrice} PLN <button className="secondary-content checkout-btn">Checkout</button></li>
            <i className="material-icons basket-close-cross" onClick={busketShowHandler}>close</i>
        </ul>
}
export {BasketList}