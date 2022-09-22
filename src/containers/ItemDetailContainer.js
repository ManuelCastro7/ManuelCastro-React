import { useState, useEffect } from "react";
import CustomFetch from "../utils/CustomFetch";
import products from "../utils/Products";
import ItemDetail from "../components/ItemDetail"
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
    const [dato, setDato] = useState({})
    const [loading, setLoading] = useState(false)
    const { id } = useParams();

    useEffect(() => {
        setLoading(true)
        CustomFetch(2000, products.find(item => item.id === parseFloat(id)))
            .then(result => setDato(result))
            .catch(err => console.log(err))
            .finally(() => setLoading(false))
    }, [id]);

    return (
        <div>
            <div>
            {loading? 
            <div className="loader"></div>
            :<ItemDetail item={dato} />}
        </div>
        </div>
    )
}
export default ItemDetailContainer;