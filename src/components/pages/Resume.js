import React from 'react';
import './style.css'

export default function Resume() {
    return (
        <div className="body">
            <h3>View My Resume</h3>
            <div className='renderBody'>
                <h5>Coding Proficiencies Include:</h5>
                <div className="row" id="proficiency-col">
                    <p className="col proficiency">HTML</p>
                    <p className="col proficiency">CSS and BootStrap</p>
                    <p className="col proficiency">JavaScript</p>
                    <p className="col proficiency">JQuery</p>
                    <p className="col proficiency">NodeJS</p>
                    <p className="col proficiency">MySQL and Sequelize</p>
                    <p className="col proficiency">MongoDB and Mongoose</p>
                    <p className="col proficiency">React</p>
                </div>
                <div>
                    <img src="./resumethumbnail.jpg"></img>
                </div>
            </div>
        </div>
    );
}
