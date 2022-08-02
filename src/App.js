import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';
import Layout from './hoc/Layout/Layout';
import LoginPage from './containers/LoginPage/LoginPage';
import AboutPage from './containers/AboutPage/AboutPage';
import TrackPage from './containers/TrackPage/TrackPage';

const App = () => {
  return (
    <div className="App">
      <Switch>
          <Route path="/tracks" component={TrackPage}/>
          <Route path="/about" component={AboutPage}/>
          <Route path="/login" component={LoginPage}/>
          <Route path="/" component={Layout}/>
      </Switch>
    </div>
  );
}

export default App;
