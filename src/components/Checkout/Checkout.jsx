import { useContext, useState } from "react"
import './checkout.css';
import { CartContext } from "../../context/CartContext"
import { collection, getDocs, addDoc, updateDoc, doc, getDoc, documentId, writeBatch, query, where } from "firebase/firestore"
import { db } from "../../firebase/config"
import { Link, Navigate } from "react-router-dom"
import { Formik, Form, Field, ErrorMessage } from "formik"
import * as Yup from 'yup'

const schema = Yup.object().shape({
    nombre: Yup.string()
                .min(3, "El nombre es demasiado corto")
                .max(20, "Máximo 20 caracteres")
                .required("Este campo es obligatorio"),
    apellido: Yup.string()
                .min(3, "El apellido es demasiado corto")
                .max(28, "Máximo 28 caracteres")
                .required("Este campo es obligatorio"),
    direccion: Yup.string()
                .min(6, "La direccion es demasiado corta")
                .max(20, "Máximo 20 caracteres")
                .required("Este campo es obligatorio"),
    telefono: Yup.string()
                .min(8, "El teléfono es demasiado corto")
                .max(15, "Máximo 15 caracteres")
                .required("Este campo es obligatorio"),
    email: Yup.string()
                .required("Este campo es obligatorio")
                .email("El email es inválido"),
    email2: Yup.string()
                .required("Este campo es obligatorio")
                .email("El email es inválido") 
                .oneOf([Yup.ref('email')], 'El email no coincide')  
})

const Checkout = () => {
    const { cart, totalCompra, vaciarCarrito } = useContext(CartContext)

    const [loading, setLoading] = useState(false)
    const [orderId, setOrderId] = useState(null)

    const handleSubmit = async (values) => {
        setLoading(true)


        const orden = {
            cliente: values,
            items: cart.map(item => ({id: item.id, precio: item.price, cantidad: item.quantity, nombre: item.name})),
            total: totalCompra(),
            fyh: new Date()
        }

        const batch = writeBatch(db)
        const ordersRef = collection(db, "orders")
        const productosRef = collection(db, "productos")
        const q = query(productosRef, where( documentId(), "in", cart.map(item => item.id) ))

        const productos = await getDocs(q)
        const outOfStock = []

        productos.docs.forEach((doc) => {
            const item = cart.find(prod => prod.id === doc.id )
            const stock = doc.data().stock
                
            if (stock >= item.quantity) {
                batch.update(doc.ref, {
                    stock: stock - item.quantity
                })
            } else {
                outOfStock.push(item)
            }
        })

        if (outOfStock.length === 0) {
            await batch.commit()
            const doc = await addDoc(ordersRef, orden)

            vaciarCarrito()
            setOrderId(doc.id)
        } else {
            alert("Hay items sin stock")
            //console.log(outOfStock)
        }

        setLoading(false)
    }

    if (orderId) {
        return (
            <div className="container my-5 checkout">
                <h2 className="text-4xl">Tu compra se registró exitosamente!</h2>
                <hr/>
                <p>Tu número de orden es: <strong>{orderId}</strong></p>

                <Link to="/" className="btn btn-light Button">Volver</Link>
            </div>
        )
    }

    if (cart.length === 0 ) {
        return <Navigate to="/"/>
    }

    return (
        <div className="container my-5">
            <h2 className="checkout">Checkout</h2>
            <hr/>

            <Formik
                initialValues={{
                    nombre: '',
                    apellido: '',
                    direccion: '',
                    telefono: '',
                    email: '',
                    email2: ''
                }}
                onSubmit={handleSubmit}
                validationSchema={schema}
            >
                {() => (
                    <Form>
                        <Field placeholder="Tu nombre" className="form-control my-2" type="text" name="nombre"/>
                        <ErrorMessage name="nombre" component="p"/>
                        <Field placeholder="Tu apellido" className="form-control my-2" type="text" name="apellido"/>
                        <ErrorMessage name="apellido" component="p"/>
                        <Field placeholder="Tu direccion" className="form-control my-2" type="text" name="direccion"/>
                        <ErrorMessage name="direccion" component="p"/>
                        <Field placeholder="Tu teléfono" className="form-control my-2" type="text" name="telefono"/>
                        <ErrorMessage name="telefono" component="p"/>
                        <Field placeholder="Tu email" className="form-control my-2" type="email" name="email"/>
                        <ErrorMessage name="email" component="p"/>
                        <Field placeholder="Confirmación de email" className="form-control my-2" type="email" name="email2"/>
                        <ErrorMessage name="email2" component="p"/>
                        <button className="btn btn-light Button" disabled={loading}>Enviar</button>
                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default Checkout