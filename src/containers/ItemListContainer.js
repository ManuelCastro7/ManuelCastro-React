import React, {useEffect, useState} from "react";
import ItemList from "../components/ItemList";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../utils/FirebaseConfig"

const ItemListContainer = () => {

    const [arrayList, setArrayList] = useState([]);
    const {id} = useParams();

    useEffect(() => {
        const firestoreFetch = async() =>{

            let q
            if(id){
                q = query(collection(db, "products"), where("categoryId", "==", id))
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
    }, [id])


    return(
        <div>
            <ItemList products={arrayList}/>
        </div>
    )
}

export default ItemListContainer;