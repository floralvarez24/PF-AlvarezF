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
                    Stock disponible: {stock}
                </p>
            </section>
            <footer className='ItemFooter'>
                 <button className='Option'> Ver detalle</button>
            </footer>
        </div>
    )
}
export default Item;