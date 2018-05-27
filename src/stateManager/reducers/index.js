import { combineReducers } from "redux";

/**
|--------------------------------------------------
| Local imports
|--------------------------------------------------
*/
import Beers from "./beers.reducer";

export default combineReducers({
  beers : Beers,
});