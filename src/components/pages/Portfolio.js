import React from 'react';

export default function Portfolio() {
    return (
        <div>
            <h3>My Portfolio</h3>
            <div className='renderBody'>
                <p>
                    Welcome to my portfolio! Over the last three months I have been attending a bootcamp style Web Development certification through UPenn. Over those months, I've accumulated a collection of applications that I'm excited to show off. Click on any of the thumbnails below to view the project.
                    <br></br><br></br>
                    You can read a little bit about me in the About Me tab, or drop me a message in the Contact Me tab. Or if you'd like to see a list of my proficiencies and a copy of my resume, feel free to take a look at the View My Resume section.
                </p>
                <article>
                <a id="large-project-1" href="https://collylee.github.io/Prework-Study-Guide/">
                    <figure>
                        <figcaption id="overlay-large">Party Locator: Video Game Forum</figcaption>
                    </figure>
                </a>
                <a id="small-project-2" href="https://collylee.github.io/horiseon-accessibility-refactor/">
                    <figure>
                        <figcaption class="overlay">ParkFinder: Plan Your Next Outdoor Getaway</figcaption>
                    </figure>
                </a>
                <a id="small-project-3" href="https://www.google.com/">
                    <figure>
                        <figcaption class="overlay">API Weather Dashboard</figcaption>
                    </figure>
                </a>
                <a id="small-project-4" href="https://www.google.com//">
                    <figure>
                        <figcaption class="overlay">Multiple-Choice Pokemon Quiz</figcaption>
                    </figure>
                </a>
                <a id="small-project-5" href="https://www.google.com//">
                    <figure>
                        <figcaption class="overlay">Instructional Writing: Using RegEx</figcaption>
                    </figure>
                </a>
                <a id="small-project-5" href="https://www.google.com//">
                    <figure>
                        <figcaption class="overlay">Employee Tracker (NodeJS)</figcaption>
                    </figure>
                </a>
            </article>
            </div>
        </div >
    );
}
