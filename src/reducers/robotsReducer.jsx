import { GET_ROBOTS, SET_CURRENT_ROBOTS, ROTBOTS_ERROR } from "../actions/types";

const initialState = {
  robotFriends: [],
  defaultRobots: [],
  noResults: false,
  error: null
}


export default (state = initialState, action) => {
  switch (action.type) {
    case GET_ROBOTS:
      return {
        ...state,
        defaultRobots: action.payload,
        robotFriends: action.payload
      };
    case SET_CURRENT_ROBOTS:
      console.log(state.robotFriends);
      const filterRobots = state.defaultRobots.filter(robotFriend => robotFriend.name.toLowerCase().includes(action.payload.toLowerCase()));
      console.log(filterRobots);

      return {
        ...state,
        robotFriends: (filterRobots.length === 0) ? state.defaultRobots : filterRobots,
        noResults: (filterRobots.length === 0) ? true : false

      };
    case ROTBOTS_ERROR:
      console.error(action.payload);
      return {
        ...state,
        error: action.payload
      };

    default:
      return state;
  }
}
