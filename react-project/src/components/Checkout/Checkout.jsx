import { useState } from "react"
import { collection, getDocs, where, query, documentId, writeBatch, addDoc} from "firebase/firestore"
import { useCart } from "../../context/CartContext"
import OrderForm from '../OrderForm/OrderForm'
import { db } from "../../services/firebase/firebaseConfig"
import Swal from 'sweetalert2';

const Checkout = () => {
    const [loading, setLoading] = useState(false)
    const [orderId, setOrderId] = useState('')
    const { cart, total, clearCart } = useCart()


    const createOrder = async ({name, phone, email}) => {
        setLoading(true)
        try {
            const objOrder = {
                buyer: {
                    name,
                    phone,
                    email
                },
                items: cart,
                total: total,

            }
    
            const batch = writeBatch(db)
            const outOfStock = []
    
            const ids = cart.map(prod => prod.id)
            const productsCollection = query(collection(db, 'products'), where(documentId(), 'in', ids))
    
            // getDocs(productsCollection).then(querySnapshot => {})
            const querySnapshot = await getDocs(productsCollection)
            const { docs } = querySnapshot
            
            docs.forEach(doc => {
                const fields = doc.data()
                const stockDb = fields.stock
    
                const productsAddedToCart = cart.find(prod => prod.id === doc.id)
                const prodQuantity = productsAddedToCart.quantity
                console.log(stockDb >= prodQuantity)
                if(stockDb >= prodQuantity) {
                    batch.update(doc.ref, { stock: stockDb - prodQuantity})
                } else {
                    outOfStock.push({ id: doc.id, ...fields})
                }
            })
    
            if(outOfStock.length === 0) {
                batch.commit()
    
                const orderCollection = collection(db, 'orders')
                const { id } = await addDoc(orderCollection, objOrder)
                
                setOrderId(id)

                clearCart()


            } else {
                console.log('Error al generar la orden - Productos sin stock disponible');

                Swal.fire({
                    icon: 'error',
                    title: 'Error al generar la orden',
                    text: 'Hay productos que no tienen stock disponible',
                });
            }
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Error al generar la orden',
                text: 'Hubo un error al crear la orden',
            });
        } finally {
            setLoading(false)
        }
        
    }

    if(loading) {
        return <h1>Se esta generando su orden, aguarde por favor...</h1>
    }

    if(orderId) {
        <div>
        return <h1>El id de su compra es: {orderId}</h1>
        </div>
    }

    return (
        <>
            <h1>CHECKOUT</h1>
            <OrderForm onConfirm={createOrder}/>
        </>
    )
}

export default Checkout