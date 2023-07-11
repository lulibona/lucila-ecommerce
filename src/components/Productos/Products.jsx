import React from 'react';
import "./products.css";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { ItemCount } from '../ItemCount/ItemCount';

export const Products = () => {
    return (
        <div className='card_container'>
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
                </Card.Text>
                {/* <Button variant="primary">Go somewhere</Button> */}
                <ItemCount initial={1} stock={20} onAdd={(quantity) => console.log("cdad agregada:", quantity)} />
            </Card.Body>
            </Card>

            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
                </Card.Text>
                {/* <Button variant="primary">Go somewhere</Button> */}
                <ItemCount initial={1} stock={20} onAdd={(quantity) => console.log("cdad agregada:", quantity)} />
            </Card.Body>
            </Card>

            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
                </Card.Text>
                {/* <Button variant="primary">Go somewhere</Button> */}
                <ItemCount initial={1} stock={20} onAdd={(quantity) => console.log("cdad agregada:", quantity)} />
            </Card.Body>
            </Card>

            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
                </Card.Text>
                {/* <Button variant="primary">Go somewhere</Button> */}
                <ItemCount initial={1} stock={20} onAdd={(quantity) => console.log("cdad agregada:", quantity)} />
            </Card.Body>
            </Card>
        </div>
    )
}