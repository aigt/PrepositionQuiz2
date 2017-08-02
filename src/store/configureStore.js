import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';

export default function configureStore(history, initialState = {}) {
  const enhancers = []
  const middleware = [
    thunk,
    routerMiddleware(history)
  ]

  const composedEnhancers = compose(
    applyMiddleware(...middleware),
    ...enhancers,
    // Required! Enable Redux DevTools with the monitors you chose
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )

  const store = createStore(rootReducer, initialState, composedEnhancers)

  if (module.hot) {
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers')
      store.replaceReducer(nextRootReducer)
    })
  }

  return store
}