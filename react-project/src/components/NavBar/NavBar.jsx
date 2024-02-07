import { NavLink, Link } from "react-router-dom";
import CartWidget from "../CartWidgets/CartWidget"; 
 import './NavBar.css'
const NavBar = () => {
    return (
        <nav>
            <div className="NavBar">
            <Link to='/'>
                <h3> Beauty Accesorios</h3>
            </Link>
               <div className="categories"><NavLink to={`/category/joyas`} className={({ isActive}) => isActive ? 'ActiveOption' : 'Option'}> JOYAS DE PLATA 925 </NavLink></div> 
                <div className="categories"><NavLink to={`/category/relojes`} className={({ isActive}) => isActive ? 'ActiveOption' : 'Option'}> RELOJES </NavLink> </div> 
                <div className="categories"><NavLink to={`/category/carteras`} className={({ isActive}) => isActive ? 'ActiveOption' : 'Option'}> CARTERAS/BANDOLERAS </NavLink></div> 
            <CartWidget />
            </div>
        </nav>
    )
}
export default NavBar;
