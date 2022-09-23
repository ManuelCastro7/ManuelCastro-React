import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { cartContext } from '../context/CartContextProvider'
import ItemCart from './ItemCart';

const Cart = () => {

  const { cart, clearCart, totalProductsPrice } = useContext(cartContext);

  return (
    <>
      {cart.length === 0 ?
        <div>
          <h1>Carrito vacio</h1>
          <Link to='/'>seguir comprando</Link>
        </div>
        :
        <div className='card'>
          {cart.map(element => <ItemCart key={element.item.id} prod={element} />)}
          <button onClick={() => clearCart()}>Borrar todo</button>
          <b>Total: ${totalProductsPrice()}</b>
        </div>
      }
    </>
  )
}

export default Cart