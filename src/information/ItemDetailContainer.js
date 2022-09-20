import DetailList from "../utils/Details";
import ItemDetail from "./ItemDetail";
import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  
    const [arrayList, setArrayList] = useState([]);
    const [loading, setLoading] = useState(false);
    const {id} = useParams();

    useEffect(() => {

        if(id){
            setLoading(true)
            DetailList ()
            .then((detail) => setArrayList(detail.filter(detail => detail.Id === parseInt(id))))
            .catch((err) => console.error(err))
            .finally(() => setLoading(false))
        }else{
            setLoading(true)
            DetailList ()
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
            :<ItemDetail details={arrayList}/>}
        </div>
    )
}

export default ItemDetailContainer;