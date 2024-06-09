// src/redux/store.js
import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

// Placeholder reducers
const rootReducer = combineReducers({
  // Añadir tus reducers aquí
});

const store = createStore(rootReducer, composeWithDevTools());

export default store;
