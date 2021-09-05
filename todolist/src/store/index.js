import { createStore, compose, applyMiddleware } from 'redux';
import combinedReducer from './combinedReducer'
import thunk from 'redux-thunk'

const store = createStore(
    combinedReducer,
    compose(
        applyMiddleware(thunk),
       window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
)

export default store;