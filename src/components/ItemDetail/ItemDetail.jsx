import './itemDetail.css';
import { ItemCount } from '../ItemCount/ItemCount';
import Card from 'react-bootstrap/Card';


const ItemDetail = ({id, name, img, price, stock, category, description}) => {
    return(

        <div className='card_container'>
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={img} alt={name} className='ItemImg'/>
        <Card.Body className='card_body'>
            <Card.Title>{name}</Card.Title>
            <Card.Text> Categoría: {category} </Card.Text>
            <Card.Text> Descripción: {description} </Card.Text>
            <Card.Text> Precio: ${price} </Card.Text>
            <ItemCount initial={1} stock={stock} onAdd={(quantity) => console.log("cdad agregada:", quantity)} />
        </Card.Body>
        </Card>
        </div>    
    )
}

export default ItemDetail
