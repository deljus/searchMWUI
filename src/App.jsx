import React from 'react';
import { Route, Switch } from 'react-router';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import {
  AuthContainer,
  ValidateContainer } from './containers/containers';

const Main = () => (
  <div>
    {this.props.children}
  </div>
);

export default (
  <Provider>
    <HashRouter>
      <Main>
        <Switch>
          <Route exact path="/" component={IndexPage} />
          <Route path="/auth" component={AuthContainer} />
          <Route path="*" component={NotFound} />
        </Switch>
      </Main>
    </HashRouter>
  </Provider>
);
