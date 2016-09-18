import React from 'react';
import { render } from 'react-dom';

// import css
import css from './styles/style.css';

// import components
import App from './components/App';
import Single from './components/Single';
import Match from './components/Match';
import Stats from './components/Stats';

// import react router deps
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import store, { history } from './store';

const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={Match}></IndexRoute>
          <Route path="/view" component={Single}></Route>
          <Route path="/stats" component={Stats}></Route>
      </Route>
    </Router>
  </Provider>

)

render(router, document.getElementById('root'));
