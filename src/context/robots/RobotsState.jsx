import React, { useReducer } from "react";
import RobotsContext from "./robotsContext";
import RobotsReducer from './robotsReducer';

import { GET_ROBOTS, SET_CURRENT_ROBOTS, ROTBOTS_ERROR } from "../types";





const RobotsState = props => {
  const initialState = {
    robotFriends: [],
    defaultRobots: [],
    noResults: false,
    error: null
  }


  const [state, dispatch] = useReducer(RobotsReducer, initialState)

  //fetech robots from API
  const fetchRobots = async () => {
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
  const setCurrentSearch = search_val => {
    console.log(search_val);

    dispatch({
      type: SET_CURRENT_ROBOTS,
      payload: search_val
    })

  };








  return <RobotsContext.Provider
    value={
      {
        robotFriends: state.robotFriends,
        defaultRobots: state.defaultRobots,
        noResults: state.noResults,
        error: state.error,
        fetchRobots,
        setCurrentSearch
      }
    }>
    {props.children}

  </RobotsContext.Provider>

}

export default RobotsState;