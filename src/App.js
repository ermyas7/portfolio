import React,{Fragment} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Menu from './components/header/Menu';
import Footer from './components/footer';
import Home from './pages/home';
import Project from './pages/projects';

function App() {
  return (
    <Router>
        <Fragment>
          <Menu/>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/project" component={Project}/>
          </Switch>
        <Footer/>
        </Fragment>
    </Router>
  );
}

export default App;
