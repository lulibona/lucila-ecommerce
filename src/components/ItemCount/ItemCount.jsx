//import { useState } from 'react';
import './itemCount.css';

export const ItemCount  = ({stock, counter, setCounter, agregar})=> {

        
        
        const increment = () =>{
            if(counter < stock){
                setCounter(counter +1)
            }
        }

        const decrement = () => {
            if( counter > 1){
                setCounter(counter-1)
            }
        }

        return(
            <div className='Counter'>
                <div className='Controls'>
                    <button className='Button' onClick={decrement}>-</button>
                    <h4 className='Number'>{counter}</h4>
                    <button className='Button' onClick={increment}>+</button>
                </div>
                <div>
                    <button className={stock>0 ? 'Button Long':'Button Long disabled'} onClick={agregar} disabled={stock === 0} >Agregar al Carrito</button>
                </div>
            </div>
        )
}

