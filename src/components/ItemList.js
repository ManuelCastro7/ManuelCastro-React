import Item from "./Item";

const ItemList = ({products}) =>{
    return(
        <div className="container">
            
            {
            products.length > 0
            ? products.map((product) => <Item key={product.id} product={product}/>)
            : <p>Cargando...</p>
        }
        </div>
    );
};
export default ItemList;