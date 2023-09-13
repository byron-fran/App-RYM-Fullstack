import {useState} from "react";
import {InputTexto} from '../layout/layout'
import { BarraBusqueda, BotonBusqueda} from "../layout/layout";
export default function SearchBar({onSearch}) {
  const [id, setId] = useState("");

  function changeHandler(event) {
    setId(event.target.value);
  }

  return (
    <BarraBusqueda >
      <InputTexto
        type="search"
        onChange={changeHandler}
        value={id}
        placeholder="Buscar por id"
      />
      <BotonBusqueda
        onClick={() => {
          onSearch(id);
        }}
      >
        Agregar
      </BotonBusqueda>
    </BarraBusqueda >
  );
}
