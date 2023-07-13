import React from 'react';
import "./products.css";
import { ItemListContainer } from '../ItemListContainer/ItemListContainer';


export const Products = () => {
    return (
        <div className='jumbotron card_container'>
            <ItemListContainer saludo={"Bienvenido a la tienda Online"}/>
            <ItemDetailContainer />
        </div>
    )
}