import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";

function NavBar(){
    return(
        <header>
          <Link to="/">GAMER-SHOP</Link>
          <div>
            <Link to="category/1">Computadoras</Link>
            <Link to="category/2">Joysticks</Link>
            <Link to="category/3">Monitores</Link>
          </div>
          <CartWidget />
        </header>
    );
  }

  export default NavBar;

