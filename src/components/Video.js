import { useState } from "react";
import Swal from 'sweetalert2'

const Video = ({thumbnail, title, description}) => {
    const [rate, setRate] = useState(0);
    const handleRate1 = () => {
        if(rate<5){
            setRate(rate+1)
        }else{
            setRate(rate+0)
        }
    }
    const handleRate2 = () => {
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
        <div className="card">
            <div>
                <img className="card-img" src={thumbnail} alt="..." />
            </div>
            <div>
                <h3>{title}</h3>
                <p>{description}</p><hr></hr>
                <div className="add">
                    <button className="card-button" onClick={handleRate1}>+</button>{rate}
                    <button className="card-button" onClick={handleRate2}>-</button>
                    <button className="card-button" onClick={add}>Agregar</button>
                </div>
            </div>
        </div>
    );
}

export default Video;