import ItemCount from "../ItemCount/ItemCount"; 
import './ItemDetail.css'

const ItemDetail = ({id, name, img, category, description, price, stock}) => {
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
                <ItemCount stock={stock} initial={1} onAdd={(quantity) => console.log('Cantidad agregada ', quantity)}/>
            </footer>
        </div>
    )
}
export default ItemDetail;