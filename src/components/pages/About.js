import React from 'react';
import './style.css'

export default function About() {
    return (
        <div className="body">
            <h3>About Me</h3>
            <div className= 'renderBody row'>
                <p className="col-5">
                    Former non-profit financier of ten years turned web developer. Currently nestled in the mountains of Central Pennsylvania (go Nittany Lions!). When I'm not plugging away at my coding, I'm either baking, playing video games, or doting on my amazing pitbull, Dexter.
                    <br></br><br></br>
                    My current skillsets are HTML and CSS, with more JavaScript knowledge on the way soon. Overall, I'm looking forward to seeing where the development path takes me, whether it's in web, software, or video game development.
                </p>
                <img className="col-8" id="about-me-photo" src="./images/IMG_20230225_171018~2.jpg">

                </img>
            </div>
        </div>
    );
}
