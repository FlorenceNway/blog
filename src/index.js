import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Provider} from 'react-redux';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import store from './store/store'
import * as serviceWorker from './serviceWorker';
import BlogList from './pages/BlogList';
import BlogNew from './pages/BlogNew';

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Switch>
        <Route path="/blog/new" component={BlogNew} />
        <Route path="/" component={BlogList} />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
