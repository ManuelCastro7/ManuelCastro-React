import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { cartContext } from '../context/CartContextProvider';

const CartWidget = () => {

  const { totalProductsQty } = useContext(cartContext);

  return (
    <>
      <div>
      <Link to="/cart"><img src="https://img.icons8.com/ios-glyphs/55/00000/shopping-cart--v1.png" alt="Cart"/></Link> {(totalProductsQty() !== 0) && <span className='badge'>{totalProductsQty()}</span>}
      </div>
    </>
  )
}

export default CartWidget;