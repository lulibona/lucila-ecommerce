import './item.css';
import Card from 'react-bootstrap/Card';
import { ItemCount } from '../ItemCount/ItemCount';



const Item = ({id, name, img, price, stock}) => {
    return(
    <div className='card_container'>
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={img} alt={name} className='ItemImg'/>
        <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>
            Precio: ${price}
            </Card.Text>
            <Card.Text>
            Stock: {stock}
            </Card.Text>
            <a href="#">Ver Detalle</a>
            <ItemCount initial={1} stock={stock} onAdd={(quantity) => console.log("cdad agregada:", quantity)} />
        </Card.Body>
        </Card>
        
       
        </div>
    )
}

export default Item