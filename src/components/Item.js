import React from "react";

const Item = ({product}) => {
    return(
        <div className="card">
            <div className="image">
                <h2 className="objet1">{product.name}</h2>
                <h2 className="objet2">{product.price}</h2>
            </div>
            <h2>Stock : {product.stock}</h2>
            <button className="card-button">INFORMACION</button>
        </div>
    )
}

export default Item;