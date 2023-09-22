import {useState, useEffect} from "react";
import {Route, Routes, useLocation, useNavigate} from "react-router-dom";
import axios from "axios";
import Cards from "./components/Cards.jsx";
import Nav from "./components/Nav.jsx";
import Detail from "./views/Detail.jsx";
import ErrorPage from "./views/ErrorPage.jsx";
import Login from "./views/Login.jsx";
import Favorites from "./views/Favorites.jsx";
import About from "./views/About.jsx";

import "./App.css";



function App() {
  const location = useLocation();
  const [personajes, setPersonajes] = useState([]);
  const navigate = useNavigate();
 
  const [access, setAccess] = useState(true);

  function loginHandler(userData) {
    const {email, password} = userData;
    const URL = "http://localhost:3001/rickandmorty/login/";
    axios(URL + `?email=${email}&password=${password}`).then(({data}) => {
      const {access} = data;
      setAccess(access);
      access && navigate("/home");
    });
  }

  function logoutHandler() {
    setAccess(false);
  }

  useEffect(() => {
    !access && navigate("/");
    //eslint-disable-next-line
  }, [access]);

  // nueva API
  //*https://rym2-production.up.railway.app/api/character/${id}?key=henrym-usuariodegithub

const searchHandler = async id => {
  try{
    const {data} = await axios (`https://rickandmortyapi.com/api/character/${id}`);
    if (data.name) {
      const personajeExiste = personajes.find(personaje => personaje.id === data.id);
      if(!personajeExiste){
         setPersonajes(value => [...value, data]);
        console.log(personajes)
        return
      }
      alert('El Personaje ya existe')
     
    } else {
       window.alert('¡No hay personajes con este ID!');
    }
  }
  catch(error){
    const errorBusqueda = error.response.status;
    if(errorBusqueda === 404){
       console.log('')
    }
  }
  
  }

  function closeHandler(id) {
    // nos llega un string
    let filteredCharacters =personajes.filter(
      (character) => character.id !== Number(id)
    );

    setPersonajes(filteredCharacters);
  }

  function randomHandler() {
    let memoria = [];

    let randomId = (Math.random() * 826).toFixed();

    randomId = Number(randomId);

    if (!memoria.includes(randomId)) {
      memoria.push(randomId);
      searchHandler(randomId);
    } else {
      alert("Ese personaje ya fue agregado");
      return;
    }
  }

  return (
    <div className="App">

        
     
      {location.pathname !== "/" && (
        <Nav
          onSearch={searchHandler}
          randomize={randomHandler}
          logout={logoutHandler}
        />
      )}

      <Routes>
        <Route path="/" element={<Login login={loginHandler} />} />
        <Route
          path="/home"
          element={<Cards personajes={personajes} onClose={closeHandler} />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>

    </div>
  );
}

export default App;
