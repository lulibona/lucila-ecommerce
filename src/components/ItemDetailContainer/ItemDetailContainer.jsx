import "./itemDetailContainer.css";
import {useState, useEffect} from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from "react-router-dom";
import { Loader } from "../Loader/Loader";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase/config";
import { Link } from 'react-router-dom';

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null)
    const [loading, setLoading] = useState(true)
    const [validProduct,setValidProduct] = useState(true)
    const {itemId} = useParams()

    useEffect(() => {
        setLoading(true)

        //1 armar la ref
        const itemRef = doc(db, "productos", itemId)

        //2 llamar la ref
        getDoc(itemRef)
            .then((doc) => {
                if(doc.exists()){
                    setProduct({
                        id: doc.id,
                        ...doc.data()
                    })
                }else{
                    setValidProduct(false)
                }
                
            })
            .catch(e => console.log(e))
            .finally(() => setLoading(false))
    }, [])

    // si el product id no existe en firebase:
    if(!validProduct){
        return(
            <div className='jumbotron container my-5 carrito vacio'>
                <h2>El producto no existe</h2>
                <br/>
                <Link className="Button empty comprar" to="/">Ir a comprar</Link>
            </div>
        )
    }

    return (

        loading
                    ? <Loader />
                    : <div className='ItemDetailContainer'>
                        <ItemDetail {...product}/>  
                      </div>
    )
}    

export default ItemDetailContainer;