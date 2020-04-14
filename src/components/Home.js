import React, { Component } from 'react'

class Home extends Component {
  render(){
    return(
      <>
        <div className="main-container">
          <h1>Welcome To My Website</h1>
          <div className="welcome-content">
            <p>My name is Evan James. I am a full-stack web developer, and a former Golf Professional. Still new to the coding world, I bring a fresh mind and a hunger to improve everyday. General Assembly's Software Engineering Bootcamp and their outstanding team of instructors have opened up a brand new world of opportunity through Web Development. I have a passion for creating the best user experience possible, while keeping things simple and clean. Always on the search for new web technologies and features.</p>
          </div>
          <div className="intro-content">
            <div>
              <img src="/pancake_stack.png" alt="full stack of pancakes" />
              <h2>Full-Stack Developer</h2>
              <p>
                I enjoy the full-stack build, from the ground up, to the syrup on top. A complete application needs careful attention to every component, to ensure a cohesive whole.
              </p>
            </div>
            <div id="middle-column">
              <img src="/binary-fingerprint.png" alt="full stack of pancakes" />
              <h2>Love for Code</h2>
              <p>
                I have spent the first 4 months of 2020 doing nothing but learning to code and studying computer science theories in General Assembly's intensive Software Immersive Remote Bootcamp. They have instilled in me the skills and the love for the art of software development.
              </p>
            </div>
            <div>
              <img src="/rubix.png" alt="full stack of pancakes" />
              <h2>Challenge Seeker</h2>
              <p>
                I constantly try to challenge myself in new endevors. I am proficient at skateboarding, snowboarding, BMX, math & the sciences. I also learned an algorithm to solve the rubix cube in 6th grade, and became a scratch golfer in less than 2 years, quickly gaining Assistant Pro status at a local golf club. Now I am on my road to becoming a great Software Developer.
              </p>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default Home
