import "./itemDetailContainer.css";
import {useState, useEffect} from 'react';
// import {getProductById} from '../../asyncMock';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from "react-router-dom";
import { Loader } from "../Loader/Loader";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase/config";

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null)
    const [loading, setLoading] = useState(true)
    const {itemId} = useParams()

    useEffect(() => {
        setLoading(true)

        //1 armar la ref
        const itemRef = doc(db, "productos", itemId)

        //2 llamar la ref
        getDoc(itemRef)
            .then((doc) => {
                setProduct({
                    id: doc.id,
                    ...doc.data()
                })
            })
            .catch(e => console.log(e))
            .finally(() => setLoading(false))
    }, [])



    // useEffect(() => {
    //     getProductById(itemId)
    //         .then(response => {
    //             setProduct(response)
    //         })
    //         .catch(error => {
    //             console.error(error)
    //         })
    // }, [itemId])

    return (
        <div className='ItemDetailContainer'>
            <ItemDetail {...product}/>  
        </div>
    )
}    

export default ItemDetailContainer;