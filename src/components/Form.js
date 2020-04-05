import React, { Component } from 'react'

class Form extends Component {
  render(){
    return(
      <>
        <form action="mailto:EvanPJames7@gmail.com" method="post" encType="text/plain">
          <div className="">
            <label htmlFor="name">Name: </label>
            <input type="text" name="name" className=""></input>
            <br/>
            <label htmlFor="mail">Your Email: </label>
            <input type="text" name="email" className=""></input> <br/>
            <label htmlFor="inquiry">Inquiry: </label>
            <input type="" name="inquiry" className=""></input>
            <br/>
            <div className="input-group">
            <input type="submit" value="Send" className="" />
            <input type="reset" value="Reset" className="" />
            </div>
          </div>
        </form>
      </>
    )
  }
}

export default Form
