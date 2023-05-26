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
                
                </p>
                <div className='row'>

                    {/* FIRST COLUMN OF PROJECT THUMBNAILS */}
                    <article className='col-5'>
                        <a href="https://morning-spire-04153.herokuapp.com/games">
                            <img className='overlay' src={process.env.PUBLIC_URL + "/images/project-1-screenshot.jpg"}>
                            </img>
                        </a>

                        <a href="https://collylee.github.io/p1-national-parks-locator/">
                            <img className='overlay' src={process.env.PUBLIC_URL + "/images/project-2-screenshot.jpg"}>
                            </img>
                        </a>

                        <a href="https://collylee.github.io/api-weather-dashboard/">
                            <img className='overlay' src={process.env.PUBLIC_URL + "/images/project-3-screenshot.jpg"}>
                            </img>
                        </a>
                    </article>

                    {/* SECOND COLUMN OF PROJECT THUMBNAILS */}
                    <article className='col-5'>
                        <a href="https://collylee.github.io/web-api-code-quiz">
                            <img className='overlay' src={process.env.PUBLIC_URL + "/images/project-4-screenshot.jpg"}>
                            </img>
                        </a>

                        <a href="https://gist.github.com/CollyLee/103aeb12df8ebcbc514e6d3a96442904">
                            <img className='overlay' src={process.env.PUBLIC_URL + "/images/project-5-screenshot.jpg"}>
                            </img>
                        </a>

                        <a href="https://github.com/CollyLee/employee-tracker">
                            <img className='overlay' src={process.env.PUBLIC_URL + "/images/project-6-screenshot.jpg"}>
                            </img>
                        </a>

                    </article>
                </div>
            </div>
        </div >
    );
}
