import cart from '/cart.svg'
import "./cartwidget.css";
import {Link} from 'react-router-dom'
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

export const CartWidget = () => {
    const { totalCantidad } = useContext(CartContext)

    return (
        <div>
            <Link to="/cart" className="cart"> 
                <img src={cart} className="cart" alt="cart" />
                <p className='notification'>{totalCantidad()}</p>
            </Link>
        </div>
    )
}