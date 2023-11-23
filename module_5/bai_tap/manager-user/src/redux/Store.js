import {applyMiddleware,createStore} from "react";
import thunk from "redux-thunk";
import { rootReducer } from "./reducer/RootReducer";

const init = {};
const middleware= [thunk];
const store = createStore(rootReducer,init,applyMiddleware(...middleware));

export default store;