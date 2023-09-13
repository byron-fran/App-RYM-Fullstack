import {Link} from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {addFavorite, removeFavorite} from "../redux/actions/actions";
import {useState, useEffect} from "react";
import {  CardDiv,BotonesDiv,PersonajeNombre,PersonajeImage, BotonDelete } from "../layout/layout";

function Card({personaje, onClose}) {
  const dispatch = useDispatch();
 
  const favorites = useSelector( state => state.favorites);
 
  // const location = useLocation()
  
  const [isFav, setFav] = useState(false);
  const [closeBtn, setCloseBtn] = useState(true);
 
  // function navigateHandler() {
  //   navigate(`/detail/${personaje.id}`);
  // }

  useEffect(() => {
    if (!onClose) {
      setCloseBtn(false);
    }
  }, []);

  useEffect(() => {
    //[rick, morty, mr poppybutthole]
    favorites.forEach((fav) => {
      if (fav.id === personaje.id) {
        setFav(true);
      }
    });
  }, [isFav]);

  function handleFavorite(character) {
    if (!isFav) {
      dispatch(addFavorite(character))
      ; //{}
      setFav(true);
    } else {
      dispatch(removeFavorite(character))
      ; //id
      setFav(false);
    }
  }

  return (
    < CardDiv>


 
      <PersonajeNombre>{personaje.name}</PersonajeNombre>

   
     <Link to={`/detail/${personaje.id}`}>
      <PersonajeImage src={personaje.image} alt={name}  />
     </Link>
     <BotonesDiv>
            {isFav ? (
        <button
          onClick={() => {
            handleFavorite(personaje.id);
          }}
        >
          ❤️
        </button>
      ) : (
        <button
          onClick={() => {
            handleFavorite(personaje);
          }}
        >
          🤍
        </button>
      )}     {closeBtn && (
        <BotonDelete
          onClick={() => {
            onClose(personaje.id)
            setFav(!true)
          }}
        >
          X
        </BotonDelete>
      )}

     </BotonesDiv>
    </ CardDiv>
  );
}

export default Card
