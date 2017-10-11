import React from 'react';
import { HashRouter as Router, Route, hashHistory } from 'react-router-dom';
import { Switch } from 'react-router'
import MainLayout from './components/layout/main-layout'
import { SearchContainer,
         MoleculSearchContainer,
         NotFound,
         ReactsSearchContainer,
         IndexLinks,
         AuthContainer,
         ValidateContainer } from './components/containers'

export default (
    <Router history={hashHistory}>
        <MainLayout>
            <Switch>
                <Route exact path='/' component={IndexLinks}/>
                <Route exact path='/search' component={SearchContainer}/>
                <Route path='/search/moleculs' component={MoleculSearchContainer}/>
                <Route path='/search/reacts' component={ReactsSearchContainer}/>
                <Route path='/search/popup' component={ReactsSearchContainer}/>
                <Route path='/validate' component={ValidateContainer}/>
                <Route path='/auth' component={AuthContainer}/>
                <Route path='*' component={NotFound}/>
            </Switch>
        </MainLayout>
    </Router>
);