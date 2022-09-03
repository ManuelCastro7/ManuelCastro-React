import './App.css';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar.js';

function App() {
  return (
    <div>
      <NavBar />
      <ItemListContainer greeting="Bienvenido" />
    </div>
  );
}

export default App;
