import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducers/index';
import thunk from 'redux-thunk';
import initialState from './initialState';
  
const enhancers = []
const middleware = [
  thunk,
 
]

if (process.env.NODE_ENV === 'development') {
    const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__
  
    if (typeof devToolsExtension === 'function') {
      enhancers.push(devToolsExtension())
    }
}
 
const composedEnhancers = compose(
    applyMiddleware(...middleware),
    ...enhancers
  )
  
  const store = createStore(
    (rootReducer),
    initialState,
    composedEnhancers
  )
  
  export default store