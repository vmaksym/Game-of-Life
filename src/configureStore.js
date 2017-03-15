import  makeRootReducer  from './reducers'
import { createStore, applyMiddleware } from 'redux'

import thunk from 'redux-thunk'
import createLogger from 'redux-logger'

const configureStore = () => {
    let middlewares = [thunk];
    if (process.env.NODE_ENV !== 'production') {
        middlewares.push(createLogger());
    }

    const store = createStore(
        makeRootReducer(),
        applyMiddleware(...middlewares)
    );

    return store;
};

export default configureStore