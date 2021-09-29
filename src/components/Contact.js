import React from 'react'
import Form from './Form'

const Contact = () => {
    return(
      <>
        <div className="main-container">
          <h1>Check Out My Resume</h1>
          <div className="resume">
            <a href="https://docs.google.com/document/d/1CZtq71wlyIJdHy3PzRXjPtZwWUMjNiRcA-YWvx0Odaw/edit">
              <img src="/resume.png" alt="screenshot of resume" />
            </a>
          </div>
          <h2>Contact Me</h2>
          <Form />
        </div>
      </>
    )
  }

export default Contact
