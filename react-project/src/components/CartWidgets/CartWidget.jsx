import cart from './assets/cart.svg'
import { Link } from 'react-router-dom'
import {useCart} from '../../context/CartContext';

const CartWidget = () => {
    const {totalQuantity} = useCart()

    return (
        <div>
            <Link to= '/cart' className= 'CartWidget'>
           <img src={cart} alt="cart-widget" className='bag'/>
             {totalQuantity}
           </Link>
        </div>
    )
}

export default CartWidget;