import "./itemDetailContainer.css";
import {useState, useEffect} from 'react';
import {getProducts} from '../../asyncMock';
import ItemDetail from '../ItemDetail/ItemDetail';

export const ItemDetailContainer = ({}) => {
    const [products, setProducts] = useState(null)

    useEffect(() => {
        getProducts('1')
            .then(response => {
                setProducts(response)
            })
            .catch(error => {
                console.error(error)
            })
    }, [])

    return (
        <div className='ItemDetailContainer'>
            <ItemDetail />  
                            {/*     xq cn los ... y no asi? products={products} */}
        </div>
    )
}    