
import './App.css'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import Banner from './components/Banner/Banner'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { CartProvider } from './context/CartContext' 
import CartView from './components/CartView/CartView'
import Checkout from './components/Checkout/Checkout'

function App() {
  return (
   <div className='App'>
    <BrowserRouter>
      <CartProvider>
      <NavBar />
      <Banner />
      <Routes>
        <Route path='/' element={<ItemListContainer />} />
        <Route path='/category/:categoryId' element={<ItemListContainer />} />
        <Route path='/item/:itemId' element={<ItemDetailContainer />} />
        <Route path='/cart' element={<CartView/>} />
        <Route path='/checkout' element={<Checkout />} />
        <Route path='*' element={<h1>404 NOT FOUND</h1>} />
      </Routes>
      </CartProvider>
    </BrowserRouter>
   </div>
  )
}

export default App;
