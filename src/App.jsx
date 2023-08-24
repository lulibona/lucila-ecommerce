import {BrowserRouter, Routes, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { NavBar } from './components/Navbar/Navbar';
import { Nosotros } from './components/Nosotros/Nosotros';
import { Contacto } from './components/Contacto/Contacto';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { CartProvider } from './context/CartContext';
import { CartView } from './components/CartView/CartView';
import Checkout  from './components/Checkout/Checkout';
import {NotFound}  from './components/NotFound/NotFound';


function App() {
  
  return (
      <div className="app_container">
        <CartProvider>
          <BrowserRouter>
            <NavBar />
            <Routes>
              <Route path='/' element={<ItemListContainer saludo={"Bienvenido a la tienda online"}/>}/>
              <Route path='/nosotros' element={<Nosotros />}/>
              <Route path='/category/:categoryId' element={<ItemListContainer />}/>
              <Route path='/item/:itemId' element={<ItemDetailContainer />}/>
              <Route path='/contacto' element={<Contacto />}/>
              <Route path='/cart' element={<CartView />}/>
              <Route path='/checkout' element={<Checkout />}/>
              <Route path='*' element={<NotFound/>}/>
            </Routes>
          </BrowserRouter>
        </CartProvider>
      </div>
  )
}

export default App
