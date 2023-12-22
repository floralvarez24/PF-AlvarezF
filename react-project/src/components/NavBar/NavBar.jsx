import CartWidget from "../CartWidgets/CartWidget"; 
 const NavBar = () => {
    return(
        <nav>
            <div className="Nav">
                <h3>Beauty accesorios</h3>
                 <button className="categories">JOYERÍA PLATA 925</button>
                <button className="categories">RELOJES</button>
                <button className="categories">CARTERAS/BANDOLERAS</button>
                <CartWidget />
            </div>
        </nav>
    )
}
export default NavBar;