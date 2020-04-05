import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Nav from './components/Nav.js'
import Home from './components/Home.js'
import About from './components/About.js'
import Footer from './components/Footer.js'
import Contact from './components/Contact.js'
import Projects from './components/Projects.js'


class App extends Component {
  render(){
    return(
      <>
        <Router>
          <div className="nav">
            <Nav />
          </div>
          <div className="header">
            <div id="header-img">
              
            </div>
            <div id="personal-photo">
            </div>
            <h1>Evan James</h1>
          </div>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/projects" component={Projects} />
        </Router>
        <Footer />
      </>
    )
  }
}

export default App;
