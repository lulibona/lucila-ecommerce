import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { NavBar } from './components/Navbar/Navbar';
import { Home } from './components/Home/Home';
import { Products } from './components/Productos/Products';
import { Nosotros } from './components/Nosotros/Nosotros';


function App() {
  const [count, setCount] = useState(0)

  return (
    
      <div className="app_container">
        <NavBar />
        <Home />
        <Nosotros />
        <Products />
      </div>
      
  )
}

export default App
