import React, { Component } from 'react'

class About extends Component {
  render(){
    return(
      <>
        <div className="main-container">
          <h1>About Me</h1>
          <div className="about-me">
            <p>My name is Evan Paul James. Born in September of '95. With so much life ahead of me, I have no where to go but up. If you're looking for your next Software Developer, you have found him.
            </p>
            <p>
            I am always eager to tackle new challenges and bring fresh new ideas to the table. I enjoy learning the full stack of technologies used in an application, but I specialize in the user experience. Being a consumer myself, I am always looking for things I can improve and implement in my next project.
            </p>
          </div>
          <div className="fund-raising">
            <img src="/golf-marathon.jpg" alt="Francis Ouimet Golf Marathon Photo"/>
            <h2>Francis Ouimet Golf Marathon</h2>
            <p>Golf is one of my great passions in life and it is a game where you can play your entire life, and also meet all kinds of people. One of my favorite things that I have been a part of is the Francis Ouimet Scholarship fund. They host a golf marathon every year, where you help raise money for students who need a little help funding their education.</p>
          </div>
        </div>
      </>
    )
  }
}

export default About
