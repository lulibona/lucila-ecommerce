import "./itemListContainer.css";
import {useState, useEffect} from 'react';
import {getProducts} from '../../asyncMock';
import ItemList from '../ItemList/ItemList';

export const ItemListContainer = ({saludo}) => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        getProducts()
            .then(response => {
                setProducts(response)
            })
            .catch(error => {
                console.error(error)
            })
    }, [])

    return (
        <div>
                <h1 className="saludo">{saludo}</h1>
                <ItemList products={products}/>
        </div>
    )
}    