import React from 'react';
import { render } from 'react-dom';
import { Route, Router, IndexRoute, Index, hashHistory, Link } from 'react-router';

import Calendar from 'components/Calendar';
import Month from 'components/Month';

const App = React.createClass ({
  render() {
    return (
      <div>
        <p>App</p>
        <Link to="/month">Month</Link>
        <Link to="/">Menu</Link>
        {this.props.children}
      </div>
    )
  }
});

render((
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Calendar} />
      <Route path="month" component={Month} />
    </Route>
  </Router>
), document.getElementById("app"));
