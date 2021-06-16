import React, { Fragment } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './Components/Home';
import SignIn from './Components/SignIn';
import './App.css';
import SignUp from './Components/SignUp';

function App() {
  return (
    <div >
        <Router>
          <Fragment>
            <Switch>
              <Route path='/' exact component={Home}/>
              <Route path='/new' component={Home}/>
              <Route path='/Login' component={SignIn}/>
              <Route path='/SignUp' component={SignUp}/>
              <Route path='/details/:id' component={Home}/>
            </Switch>
          </Fragment>
        </Router>
    </div>
  );
}

export default App;
