import React from "react";
import { Link } from "react-router-dom";

const Item = ({product}) => {

    return(
        <div className="cards">
            <h2 className="card__title">{product.name}</h2>
            <img className="image" src={product.image} alt="product"/>
            <div className="card">
                <div>
                    <Link to={"/item/"+product.id}><button>ver detalles</button></Link>
                </div>
            </div>
        </div>
    )
}

export default Item;