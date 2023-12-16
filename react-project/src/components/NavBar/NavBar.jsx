import CartWidget from "../CartWidgets/CartWidget"; 
 const NavBar = () => {
    return(
        <nav>
            <div className="Nav">
                <h3>Beauty accesorios</h3>
                 <button>JOYERÍA PLATA 925</button>
                <button>RELOJES</button>
                <button>CARTERAS/BANDOLERAS</button>
                <CartWidget />
            </div>
        </nav>
    )
}
export default NavBar;