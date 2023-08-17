import { useContext } from 'react';
import './cartView.css';
import { CartContext } from '../../context/CartContext';
import { BsTrash3 } from "react-icons/bs";
import { Link } from 'react-router-dom';

export const CartView = () => {
    const {cart, totalCompra, vaciarCarrito, removerDelCarrito} = useContext(CartContext)

    console.log(cart.length)

    if (cart.length === 0) {
        return(
            <div className='container my-5 carrito vacio'>
                <h2>Tu carrito esta vacio</h2>
                <br />
                <Link className="Button empty" to="/">Ir a comprar</Link>
            </div>
        )
    }

    return(
        <div className='container my-5 carrito'>
            <h2>Tu compra:</h2>
            <hr />

            {
                cart.map((item) => (
                    <div key={item.id}>
                        <h3>{item.name}</h3>
                        <div className='data'> 
                            <p className='dato'>Precio unitario: ${item.price}</p>
                            <p className='dato'>Cantidad: {item.quantity}</p>
                            <p className='dato'>Precio a pagar: ${item.price * item.quantity}</p>
                        </div>
                        <button onClick={() => removerDelCarrito(item.id)} className='btn btn-light Button trash'><BsTrash3/></button>   
                        {/* cuando a la func necesito pasarle un param, la envuelvo en una func anonima */}
                        <hr />
                    </div>    
                ))
            }
            <h4>Total: ${totalCompra()}</h4>
            <div className='botonera'>
                <button className="btn btn-light Button " onClick={vaciarCarrito}>Vaciar Carrito</button>
                <Link className= "btn btn-light Button " to="/checkout">Terminar mi compra</Link>
            </div>
        </div>
    )
}