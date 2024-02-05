import { Link } from "react-router-dom"
import { useCart } from "../../context/CartContext"
import CartItem from "../CartItem/CartItem"

const CartView = () => {

    const { cart,total, clearCart } = useCart()

    if (total === 0) {
        return (
            <div>
            <h1>El carrito está vacío</h1>
            <Link to='/'>Volver al inicio</Link>
            </div>
        )
    }
    
    return (
        <>
            <h1>CART</h1>
            <section>
                {cart.map((prod) => {
                    return (
                        <CartItem key={prod.id} id={prod.id} name={prod.name} price={prod.price} quantity={prod.quantity} />
                    )
                })}

            </section>
            <section>
                <h1>Total: ${total}</h1>
            </section>
            <section>
                <button onClick={clearCart}>Vaciar Carrito</button>
                <Link to='/checkout'>Checkout</Link>
            </section>
        </>
    )
}

export default CartView