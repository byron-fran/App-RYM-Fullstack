// import {connect} from "react-redux";
import { useEffect } from "react";
import {useSelector, useDispatch} from "react-redux";
import {sortById, filterByGender, reset, getFavorites} from "../redux/actions/actions";
import Cards from "../components/Cards";
import { Select, BotonReset, SelectDiv  } from "../layout/layout";

function Favorites() {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites.favorites);

  const sortHandler = (event) =>{
    dispatch(sortById(event.target.value));
  }

  const filterHandler = (event) =>{
    dispatch(filterByGender(event.target.value));
  }

  const resetHandler = () =>{
    dispatch(reset());
  }
  useEffect(() => {
    
    dispatch(getFavorites())
  },[])

  return (
    <>
      < SelectDiv  >
      <Select placeholder="Gender" onChange={filterHandler}>
        {["Male", "Female", "unknown", "Genderless"].map((gender) => (
          <option key={gender} value={gender}>
            {gender}
          </option>
        ))}
      </Select>
      <Select  placeholder="Sort" onChange={sortHandler}>
        {["Ascendente", "Descendente"].map((order) => (
          <option key={order} value={order}>
            {order}
          </option>
        ))}
      </Select >
      < BotonReset  onClick={resetHandler}>RESET</ BotonReset >
    
    </ SelectDiv >
      <Cards personajes={favorites} />
    </>

  );
}

export default Favorites;


