import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { NavBar } from './components/navbar/Navbar'
import { Home } from './components/home/Home'
// import { Products } from './components/products/Products'
// import { Nosotros } from './components/nosotros/Nosotros';


function App() {
  const [count, setCount] = useState(0)

  return (
    
      <div className="app_container">
        <NavBar />
        <Home />
        {/* <Nosotros />
        <Products /> */}
      </div>
      
  )
}

export default App
