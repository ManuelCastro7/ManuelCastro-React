import {useState } from 'react';
import Swal from 'sweetalert2'

function ItemCount({ stock, initial, onAdd }) {
    const [rate, setRate] = useState(initial);

    function bought (){
        Swal.fire(
            '¡Lo agregaste al carrito!',
            '',
            'success'
          )
    }
    function error1(){
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: `Se ha alcanzado el maximo de stock`
          })
    }
    function error2(){
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: "No se puede disminuir de 0 unidades"
          })
    }
    function error3(){
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: "No has agregado unidades"
          })
    }

    const increment = () => {
        if (rate < stock) {
            setRate(rate + 1);
        } else {
            error1()
        }
    }
    const decrement = () => {
        if (rate >= 1) {
            setRate(rate - 1);
        } else {
            error2()
        }
    }
    const add = () => {
        if (rate !== 0) {
            bought()
            setRate(1);
            onAdd(rate)
        } else {
            error3()
            setRate(1);
        }
    }
    
    return (
        <div className='add'>
            <button className="card-button" onClick={decrement}>-</button>
            {rate}
            <button className="card-button" onClick={increment}>+</button>
            <button className="card-button" onClick={add}>AGREGAR</button>
        </div>
    );
}

export default ItemCount;