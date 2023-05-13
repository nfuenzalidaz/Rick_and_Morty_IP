import { GET_CHARACTER, CLOSE_CHARACTER, GET_DETAILS, CLEAR_DETAILS } from "./action-type";

export const getCharacter = (id) => {

  return (dispatch) => {
    try {
      fetch(`https://rickandmortyapi.com/api/character/${id}`)
        .then((response) => response.json())
        .then((data) => dispatch({ type: GET_CHARACTER, payload: data }));
    } catch (error) {
      console.log(error);
    }
  };
};

export const closeCharacter = (id) => {
    return {type: CLOSE_CHARACTER, payload: id};
}

export const getDetails = (id) => {

  return (dispatch) => {
    try {
      fetch(`https://rickandmortyapi.com/api/character/${id}`)
        .then((response) => response.json())
        .then((data) => dispatch({ type: GET_DETAILS, payload: data }));
    } catch (error) {
      console.log(error);
    }
  };
};

export const clearDetails = () => {
    return {type: CLEAR_DETAILS}
}