import React from "react";
import Swal from 'sweetalert2'
import { Link } from "react-router-dom";

const Item = ({product}) => {
    function add (){
        Swal.fire(
            '¡Lo agregaste al carrito!',
            '',
            'success'
          )
    }
    return(
        <div className="cards">
            <h2 className="card__title">{product.name}</h2>
            <img className="image" src={product.image} alt="product"/>
            <div className="card">
                <div className="card-top">
                    </div>
                    <div className="card__btns">
                    <button className="watch-btn" onClick={add}>Agregar</button>
                    <Link to={"/item/"+product.id}>Detalles</Link>
                </div>
            </div>
        </div>
    )
}

export default Item;