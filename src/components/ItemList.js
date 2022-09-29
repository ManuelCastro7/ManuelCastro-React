import Item from "./Item";
import Loading from "./Loading";

const ItemList = ({products}) =>{
    return(
        <div className="container">
            {
            products.length > 0
            ? products.map((product) => <Item key={product.id} product={product}/>)
            : <Loading></Loading>
            }
        </div>
    );
};
export default ItemList;