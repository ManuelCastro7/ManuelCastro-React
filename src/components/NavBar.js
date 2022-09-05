import CartWidget from "./CartWidget";

function NavBar(){
    return(
        <header>
          <h1>GAMER-SHOP</h1>
          <div>
            <a href="">Enlace1</a>
            <a href="">Enlace2</a>
            <a href="">Enlace3</a>
          </div>
          <CartWidget />
        </header>
    );
  }

  export default NavBar;

