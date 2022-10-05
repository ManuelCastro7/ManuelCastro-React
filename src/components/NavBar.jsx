import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";

function NavBar(){
    return(
        <header>
          <div>
            <Link to="/" className="logo"><img src="https://img.icons8.com/nolan/96/2AF598/009EFD/broken-computer.png" alt="Logo"/><h1>GAME-SHOP</h1></Link>
          </div>
          <div className="links">
            <Link to="category/1">ASUS</Link>
            <Link to="category/2">ACER</Link>
            <Link to="category/3">OTRO</Link>
          </div>
          <CartWidget />
        </header>
    );
  }

  export default NavBar;
