import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import App from './components/app/App';
import BaseMap from './components/base-map/BaseMap';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        <App>
          <Route path="/" exact render={() => <Redirect to="/map" />} />
          <Route path="/map" exact component={BaseMap} />
        </App>
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
