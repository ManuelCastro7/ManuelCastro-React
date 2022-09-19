import DetailList from "../utils/Details";
import ItemDetail from "./ItemDetail";
import React, {useEffect, useState} from "react";

const ItemDetailContainer = () => {
  
    const [arrayList, setArrayList] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true)
        DetailList ()
        .then((response) => setArrayList(response))
        .catch((err) => console.error(err))
        .finally(() => setLoading(false))
    }, [])

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