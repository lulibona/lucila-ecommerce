import { useState } from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { NavBar } from './components/Navbar/Navbar';
import { Home } from './components/Home/Home';
// import { Products } from './components/Productos/Products';
import { Nosotros } from './components/Nosotros/Nosotros';
import { Contacto } from './components/Contacto/Contacto';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';


function App() {
  const [count, setCount] = useState(0)

  return (
    
      <div className="app_container">
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/nosotros' element={<Nosotros />}/>
            {/* <Route path='/products' element={<Products />}/> */}
            {/* <Route path='/category/:categoryId' element={<ItemListContainer />}/> */}
            <Route path='/category/:categoryId' element={<ItemListContainer />}/>
            <Route path='/item/:itemId' element={<ItemDetailContainer />}/>
            <Route path='/contacto' element={<Contacto />}/>
            <Route path='*' element={<h1>404 NOT FOUND</h1>}/>

          </Routes>
        </BrowserRouter>
      </div>
      
  )
}

export default App
