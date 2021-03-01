import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.scss';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import App from './components/app/App';
import store from './redux/store';
import Spinner from './components/spinner/Spinner';

const BaseMap = lazy(() => import('./components/base-map/BaseMap'));
const Checkout = lazy(() => import('./pages/checkout/Checkout'));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Suspense fallback={<Spinner />}>
            <App>
              <Route path="/" exact render={() => <Redirect to="/map" />} />
              <Route path="/map" exact component={BaseMap} />
              <Route path="/checkout" exact component={Checkout} />
            </App>
          </Suspense>
        </Switch>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
