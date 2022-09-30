import React, {useEffect, useState} from "react";
import ItemList from "../components/ItemList";
import Loading from "../components/Loading";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../utils/FirebaseConfig"

const ItemListContainer = () => {

    const [arrayList, setArrayList] = useState([]);
    const {id} = useParams();
    const [loadingPage, setLoadingPage] = useState(false)

    useEffect(() => {
        const firestoreFetch = async() =>{

            setLoadingPage(true)
            let q
            if(id){
                q = query(collection(db, "products"), where("categoryId", "==", parseInt(id)))
            }else{
                q = query(collection(db, "products"))
            }
            const querySnapshot = await getDocs(q);
            const dataFromFirestore = querySnapshot.docs.map(document => ({
                id: document.id,
                ...document.data()
            }))
            return dataFromFirestore
        }
        firestoreFetch()
        .then(result => setArrayList(result))
        .finally(() => setLoadingPage(false))
    }, [id])


    return(
        <div>
            {loadingPage ? <Loading/> : <ItemList products={arrayList}/>}
        </div>
    )
}

export default ItemListContainer;