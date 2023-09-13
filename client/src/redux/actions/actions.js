import { ADD_TO_FAVORITES,REMOVE_FAVORITE,SORT,FILTER,RESET,DETAIL} from "./action-types";
import axios from "axios";

export const addFavorite =  character => {
  const url = "http://localhost:3001/rickandmorty/fav";
  return async dispatch => {
    const {data} = await axios.post(url, character)
      return dispatch({
        type: ADD_TO_FAVORITES,
        payload: data,
      });
    
  };
};

export const removeFavorite = id => {
  const url = `http://localhost:3001/rickandmorty/fav/${id}`;
  return async  dispatch => {
    const {data} = await axios.delete(url)
      return dispatch({
        type: REMOVE_FAVORITE,
        payload: data,
      });
  };
};

export const filterByGender = gender =>{
  return {
    type: FILTER,
    payload: gender,
  };
}

export const sortById  = order => {
  return {
    type: SORT,
    payload: order,
  };
}

export const reset = () => {
  return {
    type: RESET,
  };
}

export const detail = id => {
  return async dispatch => {
    const url = `https://rickandmortyapi.com/api/character/${id}`;
    const {data} = await axios(url);
    return dispatch({
      type : DETAIL,
      payload : data
    })

  }
};