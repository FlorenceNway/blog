import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import store from './store/store';
import * as serviceWorker from './serviceWorker';
import BlogList from './pages/BlogList';
import BlogNew from './pages/BlogNew';
import BlogUpdate from './pages/BlogUpdate';
import { history } from './store/store.jsx';
import 'semantic-ui-css/semantic.min.css';
import Login from './pages/login/Login';

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      {/* <Router> NO NEED TO use router bcoz we use connected router */}
      <Switch>
        <Route path="/blog/new" component={BlogNew} />
        <Route path="/blog/update/:id" component={BlogUpdate} />
        <Route path="/blogs" component={BlogList} />
        <Route path="/" component={Login} />
      </Switch>
      {/* </Router> */}
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
