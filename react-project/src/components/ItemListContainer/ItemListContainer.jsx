import {useState, useEffect} from 'react';
//import { getProducts } from '../../asyncMock';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';
//import { getProductsByCategory } from '../../asyncMock'; 
import {db} from '../../services/firebase/firebaseConfig'
import {getDocs,collection,query,where} from 'firebase/firestore'

const ItemListContainer = () => {
 const [products, setProducts] = useState([])

 const { categoryId } = useParams()
    
useEffect(() => {
  //const asyncFunc = categoryId ? getProductsByCategory : getProducts;

  //asyncFunc(categoryId)
    //.then((res) => {
      //setProducts(res);
    //})
    //.catch((error) => {
    //});
    const productsCollection = categoryId
      ? query(collection(db, 'products'), where('category', '==', categoryId))
      :collection(db, 'products')
   
    getDocs(productsCollection)
      .then((querySnapshot) => {
        const productsAdapted= querySnapshot.docs.map(doc => {
          const fields= doc.data()
          console.log(fields)
          return {id: doc.id, ...fields}
        })
      setProducts(productsAdapted)
  })
  .catch((error) => {
    console.log('Error searching items', error)
  })


}, [categoryId]);
    
          return (
        <div className="contenedor">
         <ItemList products={products} />
        </div>
    )   
}
export default ItemListContainer;