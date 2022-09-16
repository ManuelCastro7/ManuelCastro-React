import React from "react";
import Count from "./ItemCount";

const Item = ({product}) => {
    return(
        <div className="card">
            <image>{product.image}</image>
            <h2>{product.name}</h2>
            <h2>{product.price}</h2>
            <h2>Stock : {product.stock}</h2>
            <hr></hr>
            <Count />
            <hr></hr>
            <button className="card-button">Detalles</button>
        </div>
    )
}

export default Item;