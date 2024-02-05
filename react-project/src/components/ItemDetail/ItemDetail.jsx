import { Link } from 'react-router-dom'
import ItemCount from '../ItemCount/ItemCount'
import { useCart } from '../../context/CartContext'
import { useNotification } from '../../notification/NotificationService'
import './ItemDetail.css'

const ItemDetail = ({ id, name, category, img, price, stock, description }) => {
    const { addItem, getProductQuantity } = useCart()
    const { showNotification } = useNotification()

    const handleOnAdd = (quantity) => {
        const objProductToAdd = {
            id, name, price, quantity
        }
        addItem(objProductToAdd)
        showNotification('info', `Se agregaron correctamente ${quantity} ${name}`)
    }

    const productQuantity = getProductQuantity(id)

    return (
        <div className='ItemCard'>
        <header className='Header'>
            <h2 className='ItemHeader'>
                {name}
            </h2>
        </header>
        <picture className='foto'>
            <img src={img} alt={name} />
        </picture>
        <section>
            <p className='Info'>
                Categoria: {category}
            </p>
            <p className='Info'>
                Precio: ${price} 
            </p>
            <p className='Info'>
              Descripcion: {description}
            </p>
        </section>
        <footer className='ItemFooter'>
            { 
                productQuantity > 0 ? (
                <Link to='/cart' className='Option2'>Ir al carrito</Link>) :(
                <ItemCount onAdd={handleOnAdd} stock={stock} initial={productQuantity}/>)
            } 
        </footer>
    </div>
    )
}

export default ItemDetail