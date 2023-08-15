import { useContext } from 'react';
import './cartView.css';
import { CartContext } from '../../context/CartContext';
import { BsTrash3 } from "react-icons/bs";

export const CartView = () => {
    const {cart, totalCompra, vaciarCarrito, removerDelCarrito} = useContext(CartContext)

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
                        <button onClick={() => removerDelCarrito(item.id)} className='Button trash'><BsTrash3/></button>   
                        {/* cuando a la func necesito pasarle un param, la envuelvo en una func anonima */}
                        <hr />
                    </div>    
                ))
            }
            <div>
                <h4>Total: ${totalCompra()}</h4>
                <button className="Button empty" onClick={vaciarCarrito}>Vaciar Carrito</button>
            </div>
        </div>
    )
}