
import { applyMiddleware, configureStore } from "@reduxjs/toolkit";
import { composeWithDevTools  } from "redux-devtools-extension";
import thunkMiddleware from 'redux-thunk';
import rootReducer from './reducers'

const store = configureStore({
    reducer: rootReducer,
    middleware: [thunkMiddleware]
})
export default store;