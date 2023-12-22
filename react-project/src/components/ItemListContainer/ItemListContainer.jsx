import {useState, useEffect} from 'react';
import { getProducts } from '../../asyncMock';
import ItemList from '../ItemList/ItemList';

const ItemListContainer = ({ greeting }) => {
 const [products, setProducts] = useState([])

    useEffect(() => {
        getProducts()
          .then(res => { 
            setProducts(res)
          })
          .catch(error => {
            console.log(error)
          })
        }, [])
    
          return (
        <div className="contenedor">
            <h2>{greeting}</h2>
            <div className='ListGroup'> <ItemList products={products} /></div>
        </div>
    )   
}
export default ItemListContainer;