import SearchBar from "./SearchBar";
import {NavLink } from "react-router-dom";
import { Barra ,BarraNav, BotonRandom} from "../layout/layout";
import '../layout/layout.css'

function Nav({onSearch, randomize}) {

  return (
    <Barra>
      
      <BarraNav id="barra">
        <NavLink to="/about" className={({isActive}) => isActive ? 'activo' : 'noActivo'}>About</NavLink >
        <NavLink to="/home" className={({isActive}) => isActive ? 'activo' : 'noActivo'}>Home</NavLink >
        <NavLink to="/favorites" className={({isActive}) => isActive ? 'activo' : 'noActivo'}>Favorites</NavLink >
        <BotonRandom onClick={randomize}>ADD RANDOM</ BotonRandom>
      </BarraNav>
      <SearchBar onSearch={onSearch} />
     
     
    </Barra>
  );
}

export default Nav;
