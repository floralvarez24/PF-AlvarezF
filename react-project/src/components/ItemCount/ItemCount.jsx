import './ItemCount.css';
import { useState } from "react";   

const ItemCount = ({stock, initial = 1, onAdd}) => {
    const [quantity, setQuantity] = useState(initial)

    const increment = () => {
        if (quantity < stock) {
            setQuantity(quantity + 1)
        }
    }   
    const decrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1)
        }
    }

    return (
        <div className='Counter'>
            <div className='Controls'>
                <button className="ButtonMenos" onClick={decrement}> - </button>
                <span>{quantity}</span>
                <button className="ButtonMas" onClick={increment}> + </button>
            </div>
            <div>
                <button className="Option2" onClick={() => onAdd(quantity)} disabled={!stock}>Agregar al carrito</button>
            </div>
        </div>
    )
}
export default ItemCount;