import CartWidget from "./CartWidget";

function NavBar(){
    return(
      <div>
        <header>
          <h1>GAMER-SHOP</h1>
          <div className="container">
            <a href="">Enlace1</a>
            <a href="">Enlace2</a>
            <a href="">Enlace3</a>
          </div>
          <CartWidget />
        </header>
      </div>
    );
  }

  export default NavBar;

