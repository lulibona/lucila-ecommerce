import './item.css';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';


const Item = ({item}) => {
    return(
    <div className='card_container'>
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={item.img} alt={item.name} className='ItemImg'/>
        <Card.Body className='card_body'>
            <Card.Title>{item.name}</Card.Title>
            <Card.Text>
            Precio: ${item.price} 
            </Card.Text>
            <Card.Text className={`${item.stock < 8 ? "red" : ""}`}>
            Stock: {item.stock} 
            </Card.Text>
            <Link to={`/item/${item.id}`} className='Button_detail'>Ver Detalles</Link>
        </Card.Body>
        </Card>
        </div>
    )
}

export default Item