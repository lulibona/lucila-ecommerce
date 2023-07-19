import './item.css';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';


const Item = ({id, name, img, price, stock}) => {
    return(
    <div className='card_container'>
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={img} alt={name} className='ItemImg'/>
        <Card.Body className='card_body'>
            <Card.Title>{name}</Card.Title>
            <Card.Text>
            Precio: ${price}
            </Card.Text>
            <Card.Text>
            Stock: {stock}
            </Card.Text>
            <Link to={`/item/${id}`} className='Button_detail'>Ver Detalles</Link>
        </Card.Body>
        </Card>
        </div>
    )
}

export default Item