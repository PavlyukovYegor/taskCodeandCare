import {createStore, compose, applyMiddleware} from 'redux';
import rootReducer from '../reducers';
import DevTools from '../containers/DevTool';
import {createLogger} from 'redux-logger';
import thunk from 'redux-thunk'

const logger = createLogger()

export default function configureStore(initialState) {
  const store = createStore(rootReducer, initialState, compose(DevTools.instrument(), applyMiddleware(thunk, logger)));
  if (module.hot) {
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers');
      store.replaceReducer(nextRootReducer)
    })
  }

  return store;
}
