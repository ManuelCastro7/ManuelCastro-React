import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";

function NavBar(){
    return(
        <header>
          <Link to="/">GAMER-SHOP</Link>
          <div>
            <Link to="category/1">ASUS</Link>
            <Link to="category/2">ACER</Link>
            <Link to="category/3">OTRO</Link>
          </div>
          <CartWidget />
        </header>
    );
  }

  export default NavBar;

