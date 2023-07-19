import "./itemListContainer.css";
import {useState, useEffect} from 'react';
import {getProducts, getProductsByCategory} from '../../asyncMock';
import ItemList from '../ItemList/ItemList';
import { useParams } from "react-router-dom";

export const ItemListContainer = ({saludo}) => {
    const [products, setProducts] = useState([])
    const {categoryId} = useParams()

    console.log(categoryId)


    useEffect(() => {
        const asyncFunc = categoryId ? getProducts : getProducts

        asyncFunc(categoryId)
            .then(response => {
                setProducts(response)
            })
            .catch(error => {
                console.error(error)
            })
    }, [categoryId])

    return (
        <div>
                <h1 className="saludo">{saludo}</h1>
                <ItemList products={products}/>
        </div>
    )
}    