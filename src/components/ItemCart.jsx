import React, { useContext } from 'react';
import { cartContext } from '../context/CartContextProvider';

const ItemCart = ({ prod }) => {

  const { deleteItem } = useContext(cartContext);

  return (
      <div className='cart-items'>
        <h4>{prod.item.name}</h4>
        <h3>Cantidad : {prod.count}</h3> 
        <h3>subTotal : {prod.count * prod.item.price}</h3>
        <button onClick={() => deleteItem(prod.item.id)} className="watch-btn">ELIMINAR</button>
      </div>
  )
};

export default ItemCart;
