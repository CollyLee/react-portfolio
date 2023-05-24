import React from 'react';
import './style.css'

export default function Portfolio() {
    return (
        <div className="body">
            <h3>My Portfolio</h3>
            <div className='renderBody'>
                <p>
                    Welcome to my portfolio! Over the last three months I have been attending a bootcamp style Web Development certification through UPenn. Over those months, I've accumulated a collection of applications that I'm excited to show off. Click on any of the thumbnails below to view the project.
                    <br></br><br></br>
                    You can read a little bit about me in the About Me tab, or drop me a message in the Contact Me tab. Or if you'd like to see a list of my proficiencies and a copy of my resume, feel free to take a look at the View My Resume section.
                </p>
            <div className='row'>
                <article className='col-5'>
                <a href="https://morning-spire-04153.herokuapp.com/games">
                    <figure>
                        <figcaption id="small-project-1" className="overlay">Party Locator: Video Game Forum</figcaption>
                    </figure>
                </a>
                <a href="https://collylee.github.io/p1-national-parks-locator/">
                    <figure>
                        <figcaption id="small-project-2" className="overlay">ParkFinder: Plan Your Next Outdoor Getaway</figcaption>
                    </figure>
                </a>
                <a href="https://collylee.github.io/api-weather-dashboard/">
                    <figure>
                        <figcaption id="small-project-3" className="overlay">API Weather Dashboard</figcaption>
                    </figure>
                </a>
                </article>
                
                <article className='col-5'>
                <a href="https://collylee.github.io/web-api-code-quiz">
                    <figure>
                        <figcaption id="small-project-4" className='overlay'>Multiple-Choice Pokemon Quiz</figcaption>
                    </figure>
                </a>
                <a href="https://gist.github.com/CollyLee/103aeb12df8ebcbc514e6d3a96442904">
                    <figure>
                        <figcaption id="small-project-5" className="overlay">Instructional Writing: Using RegEx</figcaption>
                    </figure>
                </a>
                <a href="https://github.com/CollyLee/employee-tracker">
                    <figure>
                        <figcaption id="small-project-6" className="overlay">Employee Tracker (NodeJS)</figcaption>
                    </figure>
                </a>
                </article>
                </div>
            </div>
        </div >
    );
}
