import { createStore, compose } from 'redux';
import combinedReducer from './combinedReducer'

const store = createStore(
    combinedReducer,
    compose(
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
)

export default store;