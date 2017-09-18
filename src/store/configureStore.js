import {createStore, compose, applyMiddleware} from 'redux';
import rootReducer from '../reducers';
import DevTools from '../containers/DevTool';
import {createLogger} from 'redux-logger';

const logger = createLogger()

export default function configureStore(initialState) {
  const store = createStore(rootReducer, initialState, compose(DevTools.instrument(), applyMiddleware(logger)));
  if (module.hot) {
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers');
      store.replaceReducer(nextRootReducer)
    })
  }

  return store;

}
