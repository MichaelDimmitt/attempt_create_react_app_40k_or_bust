import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { Settings, HomePage, TopBar } from './components/LoadComponents';

class Routes extends Component {
  render() {
    const match = this.props.match;
    return (
      <div style={{ width: '100vw', height: '20px' }}>
        <TopBar history={this.props.history} />
        <section className="body">
          <Route
            exact
            path="/app"
            render={() => <Redirect to="/app/HomePage" />}
          />
          <Route path={`${match.url}/HomePage`} component={HomePage} />
          <Route path={`${match.url}/Settings`} component={Settings} />
        </section>
      </div>
    );
  }
}

export default Routes;
