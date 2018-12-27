import {applyMiddleware, compose, createStore} from 'redux';
import CounterReducer from './counter';
import thunk from 'redux-thunk';

export default function configureStore(){
    const middlewares = [thunk];
    const middlewareEnhancer = applyMiddleware(...middlewares)

    const enhancers = [middlewareEnhancer]
    const composedEnhancers = compose(...enhancers)

    return createStore(
        CounterReducer,
        composedEnhancers
    );
}