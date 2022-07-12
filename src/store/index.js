import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga';

import {rootReducer} from './rootReducer';
import rootSaga  from './rootSaga';

import { composeWithDevTools } from 'redux-devtools-extension';

// create the saga middleware
const sagaMiddleware = createSagaMiddleware()

export const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(sagaMiddleware))
)

// then run the saga
sagaMiddleware.run(rootSaga)
