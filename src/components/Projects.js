import React from 'react'

const Projects = () => {
    return(
      <>
        <div className="main-container">
          <h1>Projects</h1>
          <div className="project-container">

            <div className="projects">
              <a href="https://github.com/Evan-Jams">
                <img src="https://pngimg.com/uploads/github/github_PNG20.png" alt="git hub logo" />
              </a>
              <div className="proj-description">
                <h3>My Personal Github</h3>
              </div>
            </div>

            <div className="projects">
              <a href="https://cheers-frontend.herokuapp.com/">
                <img src="/Cheers_app.png" alt="git hub logo" />
              </a>
              <div className="proj-description">
                <h3>Cheers</h3>
                <p>Catalog your Favorite beers</p>
              </div>
            </div>

            <div className="projects">
              <a href="https://epj-express-mongo-example.herokuapp.com/rounds">
                <img src="/handicap_tracker.png" alt="git hub logo" />
              </a>
              <div className="proj-description">
                <h3>Golf Handicap Tracker</h3>
                <p>Calculates Average Score to Par</p>
              </div>
            </div>

            <div className="projects">
              <a href="https://golf-stat-tracker-client.herokuapp.com/profile">
                <img src="/golf_stats.png" alt="git hub logo" />
              </a>
              <div className="proj-description">
                <h3>Golf Statistic Tracker</h3>
                <p>Calculates Stats of All Your Rounds</p>
              </div>
            </div>

          </div>
        </div>
      </>
    )
  }

export default Projects
