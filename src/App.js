import './App.css';
import React, { Component } from 'react';
import Navigation from './navigation';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/home';
import FormatJSON from './pages/format_json';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <br/>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/about' component={About} />
          <Route exact path='/formatter/xml' component={FormatXML} />
          <Route exact path='/formatter/json' component={FormatJSON} />
          <Route exact path='/formatter/html' component={FormatHTML} />
          <Route exact path='/formatter/sql' component={FormatSQL} />
        </Switch>
      </div>
    );
  }
}

const About = () => <div><h2>About</h2></div>
const FormatXML = () => <div><h2>Format XML</h2></div>
const FormatHTML = () => <div><h2>Format HTML</h2></div>
const FormatSQL = () => <div><h2>Format SQL</h2></div>

export default App;
