import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import reducer from './reducer.js'
import thunk from 'redux-thunk' // invocacion de codigo del framework de redux

let store = createStore (
    reducer,
    composeWithDevTools(applyMiddleware(thunk))
    );

export default store;