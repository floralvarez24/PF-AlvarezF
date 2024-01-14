import {useState, useEffect} from 'react';
import { getProducts } from '../../asyncMock';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';
import { getProductsByCategory } from '../../asyncMock'; 

const ItemListContainer = () => {
 const [products, setProducts] = useState([])

 const { categoryId } = useParams()
    
useEffect(() => {
  const asyncFunc = categoryId ? getProductsByCategory : getProducts;

  asyncFunc(categoryId)
    .then((res) => {
      setProducts(res);
    })
    .catch((error) => {
      console.log(error);
    });
}, [categoryId]);
    
          return (
        <div className="contenedor">
         <ItemList products={products} />
        </div>
    )   
}
export default ItemListContainer;