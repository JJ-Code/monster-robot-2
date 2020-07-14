import { combineReducers } from "redux";
import robotsReducer from "./robotsReducer";
//import searchReducer from './searchReducer';


export default combineReducers({
  robots: robotsReducer
});


//search: searchReducer,