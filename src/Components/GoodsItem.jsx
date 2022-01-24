function GoodsItem(props) {
    const {mainId, displayName, displayDescription, price, displayAssets, orderHandler = Function.prototype} = props;
    const item = {
        id: mainId,
        name: displayName,
        price: price.regularPrice,
        pic: displayAssets[0].full_background,
        quantity: 1
    }
    return <div className="card" id={mainId}>
                <div className="card-image">
                    <img src={displayAssets[0].full_background} alt={displayName}/>
                    
                    
                </div>
                <div className="card-content">
                    <span className="card-title">{displayName}</span>
                    <p>{displayDescription}</p>
                </div>
                <div className="card-action">
                    <button className="btn" onClick={() => orderHandler(item)}>Buy</button>
                    <span className="right">{price.regularPrice}</span>
                </div>
            </div>
}

export {GoodsItem}