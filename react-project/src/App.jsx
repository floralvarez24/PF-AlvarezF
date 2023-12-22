
import './App.css'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemCount from './components/ItemCount/ItemCount'

function App() {
  return (
   <div className='App'>
      <NavBar />  
      <ItemListContainer greeting='Bienvenidos a Beauty Accesorios' />
      <ItemCount stock={10} initial={1} onAdd={(quantity) => console.log('Cantidad agregada ', quantity)}/>
   </div>
  )
}

export default App;
