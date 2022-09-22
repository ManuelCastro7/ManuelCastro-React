import Count from "./ItemCount";

const ItemDetail = ({ item, add }) => {
    
    return (
        <>
            <div className="info">
                <div>
                    <img src={item.image} alt="..."></img>
                </div>
                <div className="details">
                    <h2>{item.name}</h2>
                    <h2>PROCESADOR : {item.processor}</h2>
                    <h2>GPU : {item.gpu}</h2>
                    <h2>MEMORIA RAM : {item.ram}</h2>
                    <h2>STOCK : {item.stock}</h2>
                    <h2>PRECIO : {item.price}</h2>
                    <Count/>
                </div>
            </div>
        </>
    );
}

export default ItemDetail;



