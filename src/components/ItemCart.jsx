import React, { useContext } from 'react';
import { cartContext } from '../context/CartContextProvider';

const ItemCart = ({ prod }) => {

  const { deleteItem } = useContext(cartContext);

  return (
      <div className='card'>
        <h1>{prod.item.name}</h1>
        <h2>Cantidad : {prod.count}</h2> 
        <h2>subTotal : {prod.count * prod.item.price}</h2>
        <button onClick={() => deleteItem(prod.item.id)} className="watch-btn">Eliminar</button>
      </div>
  )
};

export default ItemCart;
