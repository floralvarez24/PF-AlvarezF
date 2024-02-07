import './ItemDetailContainer.css'
import { useState,useEffect } from 'react'  
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'
import {db} from '../../services/firebase/firebaseConfig'
import {getDoc, doc} from 'firebase/firestore'

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null)
    const [loading, setLoading] = useState(true)
    const {itemId} = useParams()

    useEffect(() => {
        setLoading(true)
               const productDocument = doc (db, 'products', itemId)
               getDoc(productDocument)
                    .then(queryDocumentSnapshot => {
                        console.log(queryDocumentSnapshot)
                        const productAdapted= {id: queryDocumentSnapshot.id, ...queryDocumentSnapshot.data()}
                        setProduct(productAdapted)
               })
               .catch((error) => {
                   console.log('Error searching items', error)
               })

               .finally(() => {
                setLoading(false)
            })
        }, [itemId])

    if(loading) {
            return <span className="loader"></span>
        }
        
    return (
        <div className='ItemDetailContainer'>
            <ItemDetail {...product} />
        </div>
    )
}

export default ItemDetailContainer;