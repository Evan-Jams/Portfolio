import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Nav from './components/Nav.js'
import Home from './components/Home.js'
import About from './components/About.js'
import Footer from './components/Footer.js'
import Contact from './components/Contact.js'
import Projects from './components/Projects.js'


const App = () => {
    return(
      <>
        <Router>
          <div className="nav">
            <Nav />
          </div>
          <div className="header">
            <div id="header-img"></div>
            <div id="personal-photo"></div>
            <div className="right-header">
              <h1>Evan James</h1>
              <p>Software Engineer | Golf Professional</p>
              <button>
                <Link to="/about">About Me</Link>
              </button>
            </div>
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
  
export default App;
