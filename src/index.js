import 'babel-polyfill';
import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';

import {AppContainer} from 'react-hot-loader';
import App from './containers/App';
import configureStore from './store/configureStore';

const store = configureStore();

render(
  <AppContainer>
  <Provider store={store}>
    <App/>
  </Provider>
</AppContainer>, document.getElementById('root'));

if (module.hot) {
  module.hot.accept('./containers/App', () => {
    render(App)
  })
}
