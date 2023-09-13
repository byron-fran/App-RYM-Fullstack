import { useSelector, useDispatch } from "react-redux";
import { detail } from "../redux/actions/actions";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { DetallePersonaje,DetalleImagen, DetalleInfo ,DetalleParrafo,DetalleMain  } from '../layout/layout'



function Detail() {
  const navigate = useNavigate()
  const personaje = useSelector(state => state.detailCharacter);
  const dispatch = useDispatch()
  const {id} = useParams()
  useEffect(() => {
    dispatch(detail(id));
    if(Object.values(personaje).length === 0){
      navigate('/home')
    }

  },[id])

  return (
    
    <>
      <DetalleMain>
      <DetallePersonaje>
        <div style={{width : '100%'}}>
            <h2>{personaje.name}</h2>
            <DetalleImagen src={personaje.image} alt={personaje.name} style={{maxWidth : '400px', width: "300px", margin : 'auto'}}/> 
            
        </div>
        < DetalleInfo >
            <div>
              <h3>Species:</h3>
              <p>{personaje.species}</p>
            </div>
            <div>
              <h3>Gender:</h3>
              <p>{personaje.gender}</p>
            </div>
            <div>
              <h3>Status:</h3>
              <p>{personaje.status}</p>
            </div>
            <div>
              <h3>Origin:</h3>
              <DetalleParrafo>{personaje.origin?.name}</DetalleParrafo>
            </div>
            <div>
              <h3>Location:</h3>
               <DetalleParrafo>{personaje.location?.name}</DetalleParrafo>
            </div>
        </ DetalleInfo >
      </DetallePersonaje>
      </DetalleMain>


    </>
  );
}

export default Detail;
