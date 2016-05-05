import React from 'react';
import { render } from 'react-dom';
import { Route, Router, IndexRoute, Index, browserHistory, Link } from 'react-router';
import { Provider } from 'react-redux';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { putState } from "actions";
import thunk from 'redux-thunk';
import app from 'reducers';

import Calendar from 'components/Calendar';
import CurrentMonth from 'containers/currentMonth';
import CurrentDay from 'containers/currentDay';
import Nav from 'components/Nav';

const store = createStore(
  combineReducers({
    app,
    routing: routerReducer
  }),
  applyMiddleware(thunk)
);

store.dispatch(putState());

const history = syncHistoryWithStore(browserHistory, store);


const App = React.createClass ({
  render() {
    return (
      <div>
        <nav className="months-nav">
          <ul className="links">
            {Nav}
          </ul>
        </nav>
        <section className="main">
          {this.props.children}
        </section>
      </div>
    )
  }
});

render((
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={CurrentMonth} />
        <Route path="month/:monthId" component={CurrentMonth} />
        <Route path="month/:monthId/day/:dayId" component={CurrentDay} />
      </Route>
    </Router>
  </Provider>
), document.getElementById("app"));
