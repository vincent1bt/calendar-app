import React from 'react';
import { render } from 'react-dom';
import { Route, Router, IndexRoute, Index, browserHistory, Link } from 'react-router';
import { Provider } from 'react-redux';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { putState, createReminder } from "actions";
import thunk from 'redux-thunk';
import app from 'reducers';

import Calendar from 'components/Calendar';
import CurrentMonth from 'containers/currentMonth';
import CurrentDay from 'containers/currentDay';

const store = createStore(
  combineReducers({
    app,
    routing: routerReducer
  }),
  applyMiddleware(thunk)
);

store.dispatch(putState());
// store.dispatch(getMovies());
// store.dispatch(getReminders());
// store.dispatch(getEvents());


store.dispatch(createReminder("HOLA MUNDO", 115, 1));
store.dispatch(createReminder("que onda", 225, 2));

console.log(store.getState().app.events.get("112"))

const history = syncHistoryWithStore(browserHistory, store);

const App = React.createClass ({
  render() {
    return (
      <div>
        <ul className="links">
          <li><Link to="/month/1">January</Link></li>
          <li><Link to="/month/2">February</Link></li>
          <li><Link to="/month/3">Month</Link></li>
          <li><Link to="/month/4">Month</Link></li>
          <li><Link to="/month/5">Month</Link></li>
          <li><Link to="/month/6">Month</Link></li>
          <li><Link to="/month/7">Month</Link></li>
          <li><Link to="/month/8">Month</Link></li>
          <li><Link to="/month/9">Month</Link></li>
          <li><Link to="/month/10">Month</Link></li>
          <li><Link to="/month/11">Month</Link></li>
          <li><Link to="/month/12">Month</Link></li>
        </ul>
        {this.props.children}
      </div>
    )
  }
});

render((
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={Calendar} />
        <Route path="month/:monthId" component={CurrentMonth} />
        <Route path="month/:monthId/day/:dayId" component={CurrentDay} />
      </Route>
    </Router>
  </Provider>
), document.getElementById("app"));
