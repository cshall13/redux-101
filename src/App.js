import React, { Component } from 'react';
import './App.css';
import Students from './Students';

// if importing the default you can call it whatever you want...
import ReduxStudents from './Containers/ReduxStudents';
// import weatherdata component
import WeatherData from './Containers/WeatherData';

import {BrowserRouter as Router, Route, Link} from 'react-router-dom';


class App extends Component {
  render() {
    return (
          <Router>
              <div className="App">
                  <Link to="/">Weather</Link> |
                  <Link to="/students"> Students</Link> |
                  <Link to="/old-students"> Basic Students</Link>
                  <Route exact path="/" component={WeatherData} />
                  <Route path="/students" component={ReduxStudents} />
                  <Route path="/old-students" component={Students} />
              </div>
          </Router>
    );
  }
}

export default App;
