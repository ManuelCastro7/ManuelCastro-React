import ItemCount from "./ItemCount";
import React, { useContext} from 'react';
import { Link } from "react-router-dom";
import { cartContext } from "../context/CartContextProvider";
import Loading from "./Loading";

const ItemDetail = ({item}) => {
    const { addToCart, isInCart, deleteItem } = useContext(cartContext);


  const onAdd = (count) => {
    addToCart(item, count);
  }

  if (!item.id) return (
    <div>
      <Loading></Loading>
    </div>
  )
    return (
        <>
            <div className="itemDetail">
                <h2>{item.name}</h2>
                <div className="info">
                    <div>
                        <img src={item.image} alt="..."></img>
                    </div>
                    <div className="details">
                        <h3>✔️Pantalla : {item.screen}</h3>
                        <h3>✔️Procesador : {item.processor}</h3>
                        <h3>✔️Almacenamiento : {item.memory}</h3>
                        <h3>✔️Memoria : {item.ram}</h3>
                        <h3>✔️Stock : {item.stock}</h3>
                        <h3>✔️Precio : ${item.price}</h3>
                        <div className="links">
                            {isInCart(item.id) ? <button className="card-button" onClick={() => deleteItem(item.id)}>ELIMINAR</button> : <p></p>}
                            {isInCart(item.id) ? <Link to="/cart" >carrito</Link> : <ItemCount initial={1} stock={item.stock} onAdd={onAdd} />}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ItemDetail;



