import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.scss';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import App from './components/app/App';
import BaseMap from './components/base-map/BaseMap';
import store from './redux/store';
import Checkout from './pages/checkout/Checkout';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <App>
            <Route path="/" exact render={() => <Redirect to="/map" />} />
            <Route path="/map" exact component={BaseMap} />
            <Route path="/checkout" exact component={Checkout} />
          </App>
        </Switch>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
