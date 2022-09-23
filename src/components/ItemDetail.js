import ItemCount from "./ItemCount";
import { useState } from "react"
import { Link } from "react-router-dom";

const ItemDetail = ({item}) => {
    const [itemCount, setItemCount] = useState(0);

    const onAdd = (cantidad) => {
        setItemCount(cantidad)
    }
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
                        <h3>✔️Precio : {item.price}</h3>
                        {
                        itemCount === 0
                            ? <ItemCount initial={itemCount} stock={item.stock} onAdd={onAdd} />
                            : <Link to="/cart">Ver en el carrito</Link>
                        }
                    </div>
                </div>
            </div>
        </>
    );
}

export default ItemDetail;



