import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { cartContext } from '../context/CartContextProvider'
import ItemCart from './ItemCart';
import { collection, doc, serverTimestamp, setDoc, updateDoc, increment } from "firebase/firestore";
import { db } from "../utils/FirebaseConfig"

const Cart = () => {
  const { cart, clearCart, totalProductsPrice } = useContext(cartContext);

  async function createOrder(){

    let arrayItemsForDB = cart.map(element => ({
      id: element.item.id,
      price: element.item.price,
      title: element.item.name,
      quantity: element.count
    }))

    let order = {
      buyer: {
        name: "Veronica Torrez Alcocer",
        email: "torrezveronica@gmail.com", 
        phone: "12345678" 
      },
      date: serverTimestamp(),
      items: arrayItemsForDB,
      total: totalProductsPrice()
    }
    const newOrderRef = doc(collection(db, "orders"))
    await setDoc(newOrderRef, order);

    cart.forEach(async(element) => {
      const itemRef = doc(db, "products", element.item.id)
      await updateDoc(itemRef, {
        stock: increment(-element.count)
      })
    })
    clearCart()
    alert("Tu orden fue creada. ID:" + newOrderRef.id)
  }
  

  return (
    <>
      {cart.length === 0 ?
        <div className='links'>
          <h2>Carrito vacio</h2>
          <Link to='/'>seguir comprando</Link>
        </div>
        :
        <div>
          {cart.map(element => <ItemCart key={element.item.id} prod={element} />)}
          <h4>Total : ${totalProductsPrice()}</h4>
          <button onClick={createOrder}>ORDEN DE COMPRA</button><br></br><br></br>
          <button onClick={() => clearCart()}>VACIAR EL CARRITO</button>
        </div>
      }
    </>
  )
}

export default Cart