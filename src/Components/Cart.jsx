import { useContext } from 'react'
import { ShopContext } from '../context'


function Cart() {
    const { order, busketShowHandler } = useContext(ShopContext)
    
    const quantity = order.length
    return (
        <div className="shopping_cart" onClick={busketShowHandler}>
            <i className="medium material-icons">shopping_cart</i>
            { quantity ? <span className="cart-quantity">{quantity}</span> : null }
            
        </div>
    );
}

export {Cart}