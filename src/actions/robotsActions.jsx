import { GET_ROBOTS,  SET_CURRENT_ROBOTS, ROTBOTS_ERROR } from "./types";


//fetech robots from API
export const fetchRobots = () => async dispatch => {
  try {
    const data = await fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json())
      
    dispatch({
      type: GET_ROBOTS,
      payload: data
    });
  } catch (err) {
    dispatch({
      type: ROTBOTS_ERROR,
      payload: err.response.statusText
    });
  }
};


// Set current search
export const setCurrentSearch = search_val => {
  console.log(search_val);
  
  return {
    type: SET_CURRENT_ROBOTS,
    payload: search_val
  };
};