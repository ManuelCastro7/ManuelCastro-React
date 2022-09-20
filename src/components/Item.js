import React from "react";
import Swal from 'sweetalert2'
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

const Item = ({product}) => {
    const {id} = useParams();
    function add (){
        Swal.fire(
            '¡Lo agregaste al carrito!',
            '',
            'success'
          )
    }
    return(
        <div className="cards">
            <img className="image" src={product.image} alt="product"/>
        <div className="card">
                <div className="card-top">
                <h2 className="card__title">{product.name}</h2>
            <div className="rating">
                <svg width="17" height="17" viewBox="0 0 17 17" fill="none"></svg>
            </div>
            </div>
                <div className="card__btns">
                <button className="watch-btn" onClick={add}>Agregar</button>
                <Link className="watch-btn" to={`/item/${id}`}>Detalles</Link>
            </div>
        </div>
        </div>
    )
}

export default Item;