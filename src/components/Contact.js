import React, { Component } from 'react'
import Form from './Form'

class Contact extends Component {
  render(){
    return(
      <>
        <div className="main-container">
          <h1>Check Out My Resume</h1>
          <div className="resume">

            <img src="/resume.png" alt="screenshot of resume" />
          </div>
          <h2>Contact Me</h2>
          <Form />
        </div>
      </>
    )
  }
}

export default Contact
