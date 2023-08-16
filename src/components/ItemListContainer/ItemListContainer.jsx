import "./itemListContainer.css";
import {useState, useEffect} from 'react';
import {getProducts, getProductsByCategory} from '../../asyncMock';
import ItemList from '../ItemList/ItemList';
import { useParams } from "react-router-dom";
import { Loader } from "../Loader/Loader";

export const ItemListContainer = ({saludo}) => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const {categoryId} = useParams()

    useEffect(() => {
        setLoading(true)
        const asyncFunc = categoryId ? getProductsByCategory : getProducts

        asyncFunc(categoryId)
            .then(response => {
                setProducts(response)  
            })
            .catch(error => console.error(error))
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