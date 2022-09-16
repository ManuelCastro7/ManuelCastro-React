import {useState } from 'react';
import Swal from 'sweetalert2'

const Count = () => {

    const [rate, setRate] = useState(0);

    const increment = () => {
        if(rate<5){
            setRate(rate+1)
        }
    }

    const decrement = () => {
        if(rate <=5 && rate >0){
            setRate(rate-1)
        }
    }
    
    function add (){
        Swal.fire(
            '¡Lo agregaste al carrito!',
            '',
            'success'
          )
    }
    return (
        <div className='add'>
            <button className="card-button" onClick={decrement}>-</button>
            {rate}
            <button className="card-button" onClick={increment}>+</button>
            <button className="card-button" onClick={add}>Agregar</button>
        </div>
    );
}

export default Count;