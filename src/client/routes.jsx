import React from 'react';
import {Route, IndexRoute} from 'react-router';
import Home from './components/home';
import Cookbook from './components/cookbook';

export const routes = (
  <Route path="/">
    <IndexRoute component={Home}/>
    <Route path="cookbook" component={Cookbook}/>
  </Route>
);
