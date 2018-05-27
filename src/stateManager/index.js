import {createStore, applyMiddleware,compose} from 'redux';
import thunk from 'redux-thunk';
import { autoRehydrate } from "redux-persist";

/**
|--------------------------------------------------
| Local imports
|--------------------------------------------------
*/
import reducers from "./reducers";

const middlewares = [
    thunk
]

export default createStore(
    reducers,
    undefined,
    compose(applyMiddleware(...middlewares),autoRehydrate())
);