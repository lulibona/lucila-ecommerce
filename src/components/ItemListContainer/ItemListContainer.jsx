import "./itemListContainer.css";
import {useState, useEffect} from 'react';
import ItemList from '../ItemList/ItemList';
import { useParams } from "react-router-dom";
import { Loader } from "../Loader/Loader";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../firebase/config";

export const ItemListContainer = ({saludo}) => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    
    const {categoryId} = useParams()

    useEffect(() => {
        setLoading(true)


    //1. armar la referencia (sync)
    const productosRef = collection(db, "productos")
    const q = categoryId
                    ? query(productosRef, where('category', "==", categoryId) )
                    : productosRef
                    
    //2.llamar a esa ref (async) -> getDocs es una func async y retorna una promesa
    getDocs(q)
            .then((resp) => {
                const docs = resp.docs.map((doc) => {
                    return {
                        id: doc.id,
                        ...doc.data()
                    }
                })
                setProducts(docs)
            })
            .catch(e => console.log(e))
            .finally(() => setLoading(false))
    }, [categoryId])


    return (
        <div>
            {
                loading
                    ? <Loader/>
                    : <div> 
                        <h1 className="saludo">{saludo}</h1>
                        <ItemList products={products}/>
                    </div>
            }
        </div>
    )
}    