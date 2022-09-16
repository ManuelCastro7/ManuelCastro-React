import productList from "../utils/Products";
import React, {useEffect, useState} from "react";
import ItemList from "./ItemList";

const ItemListContainer = () => {

    const [arrayList, setArrayList] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true)
        productList ()
        .then((response) => setArrayList(response))
        .catch((err) => console.error(err))
        .finally(() => setLoading(false))
    }, [])

    return(
        <div>
            {loading? 
            <div className="loader">
                <div class="face">
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