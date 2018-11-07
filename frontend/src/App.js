import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Login from './pages/Login';
import Timeline from './pages/Timeline';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact Component={Login}/>
          <Route path="/timeline" Component={Timeline}/>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
