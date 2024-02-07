import {useState, useEffect} from 'react';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';
import {db} from '../../services/firebase/firebaseConfig'
import {getDocs,collection,query,where} from 'firebase/firestore'
import './ItemListContainer.css'

const ItemListContainer = () => {
  const [loading, setLoading] = useState(true)
  const [products, setProducts] = useState([])

 const { categoryId } = useParams()
    
useEffect(() => {
  setLoading(true)

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
 .finally(() => {
                setLoading(false)
            })

}, [categoryId]);
    
    if(loading) {
    return <span className="loader"></span>
    }
          return (
        <div className="contenedor">
         <ItemList products={products} />
        </div>
    )   
}
export default ItemListContainer;