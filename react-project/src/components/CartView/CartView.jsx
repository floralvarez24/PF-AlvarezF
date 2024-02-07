import { Link } from "react-router-dom"
import { useCart } from "../../context/CartContext"
import CartItem from "../CartItem/CartItem"
import './CartView.css'

const CartView = () => {

    const { total, clearCart } = useCart()

    if (total === 0) {
        return (
            <div className="emptyCart">
            <h1>El carrito está vacío</h1>
            <Link to='/' className="cartButton">Volver al inicio</Link>
            </div>
        )
    }
    
    return (
        <>
            <div className="Cart">
            <h1> Mi carrito</h1>
            <section>
            <CartItem />
            </section>
            <section className="total">
                <h2>Total: ${total}</h2>
            </section>
            <section className="cartFooter">
                <div>
                <button className="cartButton" onClick={clearCart}>Vaciar Carrito</button>
                </div>
                <div className="cartButton">
                <Link to='/checkout'>Terminar compra</Link>
                </div>
            </section>
            </div>
        </>

    )
}

export default CartView