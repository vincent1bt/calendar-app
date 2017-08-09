import React from 'react';
import { render } from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import { Route, Switch } from 'react-router-dom';

import { ConnectedRouter, routerReducer, routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';

import { putState } from "actions";

import app from 'reducers';

import CurrentMonth from 'containers/currentMonth';
import CurrentDay from 'containers/currentDay';
import Nav from 'components/Nav';

const history = createHistory();
const routingMiddleware = routerMiddleware(history);

const store = createStore(
  combineReducers({
    app,
    routing: routerReducer
  }),
  applyMiddleware(thunk, routingMiddleware)
);

store.dispatch(putState());

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <Nav/>
        <Switch>
          <Route exact path="/" component={CurrentMonth} />
          <Route exact path="/month/:monthId" component={CurrentMonth} />
          <Route exact path="/month/:monthId/day/:dayId" component={CurrentDay} />
        </Switch>
      </div>
    </ConnectedRouter>
  </Provider>,
  document.getElementById("app")
);
