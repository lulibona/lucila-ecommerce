import { createContext, useState } from "react";

export const CartContext = createContext()

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([])
  console.log(cart)
                                                        
  const agregarAlCarrito = (item) => {
    setCart([...cart, item])
    //seteo el estado haciendo un spread del cart(replico el array q ya está) y agrego el item nuevo
  }

  const removerDelCarrito = (id) => {
    setCart(cart.filter((item) => item.id !== id))  
  }   //cn filter determino lo q se queda en el array

  //varifico si el prod ya fue agregado antes al carrito (some retorna T/F)
  const isInCart = (id) => {
    return cart.some((item) => item.id === id)
  }

  const totalCompra = () => {
    return cart.reduce((acc, item) => acc + item.price * item.quantity, 0)
  }
  
  const totalCantidad = () => {
    return cart.reduce((acc, item) => acc + item.quantity, 0)
  }

  const vaciarCarrito = () => {
    setCart([])
  }

  return(
    <CartContext.Provider value={{
        cart,
        agregarAlCarrito,
        isInCart,
        totalCompra,
        vaciarCarrito,
        totalCantidad,
        removerDelCarrito
      }}>   
        {children}
    </CartContext.Provider>
  )
}