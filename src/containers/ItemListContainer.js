import productList from "../utils/productList";
import products from "../utils/Products"
import React, {useEffect, useState} from "react";
import ItemList from "../components/ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {

    const [arrayList, setArrayList] = useState([]);
    const [loading, setLoading] = useState(false);
    const {id} = useParams();

    useEffect(() => {

        if(id){
            setLoading(true)
            productList ()
            .then((response) => setArrayList(products.filter(product => product.categoryId === parseInt(id))))
            .catch((err) => console.error(err))
            .finally(() => setLoading(false))
        }else{
            setLoading(true)
            productList ()
            .then((response) => setArrayList(response))
            .catch((err) => console.error(err))
            .finally(() => setLoading(false))
        }
    }, [id])

    return(
        <div>
            {loading? 
            <div className="loader">
                <div className="face">
                    <div className="circle"></div>
                </div>
                <div className="face">
                    <div className="circle"></div>
                </div>
            </div>
            :<ItemList products={arrayList}/>}
        </div>
    )
}

export default ItemListContainer;