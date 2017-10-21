import React from 'react';
import { Route, Switch } from 'react-router';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import store from './core/store';
import {
  IndexPage,
  NotFoundPage,
  ValidatePage } from './components';
import { MarvinEditorView, PageStepsView } from './components/WrappedContainers';

const Main = ({ children }) => (
  <div>
    <PageStepsView />
    <MarvinEditorView />
    {children}
  </div>
);

export default (
  <Provider store={store}>
    <HashRouter>
      <Main>
        <Switch>
          <Route exact path="/" component={IndexPage} />
          <Route exact path="/validate" component={ValidatePage} />
          <Route path="*" component={NotFoundPage} />
        </Switch>
      </Main>
    </HashRouter>
  </Provider>
);
