import './App.css';
import React, { Component } from 'react';
import Navigation from './navigation';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/home';
import FormatJSON from './pages/format_json';
import FormatXML from './pages/format_xml';
import FormatHTML from './pages/format_html';
import FormatCSS from './pages/format_css';
import FormatJS from './pages/format_js';

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
          <Route exact path='/formatter/css' component={FormatCSS} />
          <Route exact path='/formatter/js' component={FormatJS} />
        </Switch>
      </div>
    );
  }
}

const About = () => <div><h2>About</h2></div>

export default App;
