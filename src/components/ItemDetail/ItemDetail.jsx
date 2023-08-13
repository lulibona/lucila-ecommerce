import './itemDetail.css';
import { ItemCount } from '../ItemCount/ItemCount';
import Card from 'react-bootstrap/Card';
import { useContext, useState } from 'react';
import { CartContext } from '../../context/CartContext';
import { Link } from "react-router-dom"


const ItemDetail = ({id, name, img, price, stock, category, description}) => {
    const { agregarAlCarrito, isInCart } = useContext(CartContext)

    const[quantity, setQuantity] = useState(1)

    console.log(isInCart(id))
    
    const handleAgregar = () => {
         const newItem = { id, name, price , quantity }
         agregarAlCarrito(newItem)
    }

    return(
        <div className='card_detailContainer'>
        <Card className='card_detail' style={{ width: '18rem' }}>
        <Card.Img variant="top" src={img} alt={name} className='ItemImg'/>
        <Card.Body className='card_body'>
            <Card.Title>{name}</Card.Title>
            <Card.Text> Categoría: {category} </Card.Text>
            <Card.Text> Descripción: {description} </Card.Text>
            <Card.Text> Precio: ${price} </Card.Text>

            {
                isInCart(id)
                ? <Link className= "Button Long" to="/cart">Terminar mi compra</Link>
                : <ItemCount 
                    stock={stock} 
                    counter={quantity} 
                    setCounter={setQuantity} //paso func x propiedades
                    agregar={handleAgregar}
                />
            }

            
        </Card.Body>
        </Card>
        </div>    
    )
}

export default ItemDetail
