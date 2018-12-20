import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import Loadable from 'react-loadable';
import Loading from './components/Loading';

const TopBar = Loadable({
  loader: () => import('./components/TopBar'),
  loading: Loading,
});

const RsvpComponent = Loadable({
  loader: () => import('./components/RsvpComponent'),
  loading: Loading,
});

const Settings = Loadable({
  loader: () => import('./components/Settings'),
  loading: Loading,
});

const HomePage = Loadable({
  loader: () => import('./components/HomePage'),
  loading: Loading,
});

const Login = Loadable({
  loader: () => import('./components/Login'),
  loading: Loading,
});

class Routes extends Component {
  render() {
    const { match } = this.props

    return (
      <div style={{ width: '100vw', height: '20px' }}>
        <TopBar history={this.props.history} />
        <section className="body">
          <Route
            exact
            path="/app"
            render={() => <Redirect to="/app/RsvpMe" />}
          />
          <Route path={`${match.url}/RsvpMe`} component={RsvpComponent} />
          <Route path={`${match.url}/Login`} component={Login} />
          <Route path={`${match.url}/HomePage`} component={HomePage} />
          <Route path={`${match.url}/Settings`} component={Settings} />
        </section>
      </div>
    );
  }
}

export default Routes
