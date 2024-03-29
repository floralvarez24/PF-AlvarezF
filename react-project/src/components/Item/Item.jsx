import { Link } from 'react-router-dom';
import './Item.css'

const Item = ({id, name, img, description, price, stock}) => {
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
                    Precio: ${price} 
                </p>
                <p className='Info'>
                    Stock disponible: {stock === 0 ? "Sin stock" : stock}
                </p>
            </section>
              <footer className='ItemFooter'>
                 <div className='det'><Link to={stock > 0 ? `/item/${id}` : '#'}> {stock > 0 ? 'Ver detalle' : 'Sin stock'} </Link> </div>
              </footer>
        </div>
    )
}
export default Item;
