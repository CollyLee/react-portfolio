import React from 'react';
import './style.css'

export default function About() {
    return (
        <div className="body">
            <h3>About Me</h3>
            <div className='renderBody row'>
                <p className="col-6">
                    Former non-profit financier of ten years turned web developer. Currently nestled in the mountains of Central Pennsylvania (go Nittany Lions!). When I'm not plugging away at my coding, I'm either baking, playing video games, or doting on my amazing pitbull, Dexter.
                    <br></br><br></br>
                    You can see a full list of my proficiencies on the View My Resume tab. I am a full-stack developer, but I am particularly interested in front-end development. 
                    <br></br><br></br>
                    Please feel free to look around my site. You can browse a list of some of my favorite projects, download my resume, and reach out to me via the form provided on the Contact Me tab.
                </p>
                <img className="col-5" id="about-me-photo" src="./images/IMG_20230225_171018~2.jpg">

                </img>
            </div>
        </div>
    );
}
