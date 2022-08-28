import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import thunk from 'redux-thunk'
import { rootSaga } from './saga/root.saga'
import { rootReducer } from './reducer/root.reducer'

// create the saga middleware
const sagaMiddleware = createSagaMiddleware()

const middleware = [thunk ,sagaMiddleware]
// mount it on the Store
export const store = createStore(
  rootReducer,
  applyMiddleware(...middleware)
)

// then run the saga
sagaMiddleware.run(rootSaga)

// render the application