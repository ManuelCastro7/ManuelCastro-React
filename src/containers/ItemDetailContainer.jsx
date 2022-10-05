import { useState, useEffect } from "react";
import products from "../utils/Products";
import ItemDetail from "../components/ItemDetail"
import { useParams } from "react-router-dom";
import Loading from "../components/Loading";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../utils/FirebaseConfig"

const ItemDetailContainer = () => {
    const [dato, setDato] = useState({})
    const { id } = useParams();

    useEffect(() => {
        const docRef = doc(db, "products", id);
        getDoc(docRef)
        .then(result => setDato({
            id: result.id,
            ...result.data() 
        }))
}, [id])

    return (
        <div>
            {products.length > 0 ?<ItemDetail item={dato}/>:<Loading/>}
        </div>
    )
}
export default ItemDetailContainer;