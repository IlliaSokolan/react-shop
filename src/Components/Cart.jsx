function Cart(props) {
    const { quantity = 0, busketShowHandler = Function.prototype } = props;
    return (
        <div className="shopping_cart" onClick={busketShowHandler}>
            <i className="medium material-icons">shopping_cart</i>
            { quantity ? <span className="cart-quantity">{quantity}</span> : null }
            
        </div>
    );
}

export {Cart}