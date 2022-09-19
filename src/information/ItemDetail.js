import React from "react";
import Count from "../components/ItemCount";

const ItemDetail = ({details}) =>{
    return(
        <>
            {details.map((detail) => 
                <div key={details.id}>
                    <div className="info">
                        <div className="infoImage"></div>
                    <div className="details">
                        <h2>{detail.name}</h2>
                        <h2>PROCESADOR : {detail.processor}</h2>
                        <h2>GPU : {detail.gpu}</h2>
                        <h2>MEMORIA RAM : {detail.ram}</h2>
                        <h2>STOCK : {detail.stock}</h2>
                        <h2>PRECIO : {detail.price}</h2>
                        <Count/>
                    </div>
                </div>
            </div>)}
        </>
    );
};
export default ItemDetail;