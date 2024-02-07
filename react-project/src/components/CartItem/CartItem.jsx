import { useCart } from "../../context/CartContext"
import './CartItem.css'

const CartItem = () => {
 const { cart, removeItem } = useCart()

 return(   
                cart.map(prod => {
                    return (
                        <div key={prod.id} className="cartItem"> 
                            <h3>{prod.name}</h3>
                            <h4>Cantidad: {prod.quantity}</h4>
                            <h4>Precio por unidad: ${prod.price}</h4>
                            <h4>Subtotal: ${prod.quantity * prod.price}</h4>
                            <button  className="remover"onClick={() => removeItem(prod.id)}>x</button>
                        </div>
                    )
                })
 )
}
export default CartItem;