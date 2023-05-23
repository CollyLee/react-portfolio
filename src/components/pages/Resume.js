import React from 'react';

export default function Resume() {
    return (
        <div>
            <h3>View My Resume</h3>
            <div className='renderBody'>
                <h5>Coding Proficiencies</h5>
                <ul>
                    <li>HTML</li>
                    <li>CSS and BootStrap</li>
                    <li>JavaScript</li>
                    <li>JQuery</li>
                    <li>NodeJS</li>
                    <li>MySQL and Sequelize</li>
                    <li>MongoDB and Mongoose</li>
                    <li>React</li>
                </ul>
                <img src="./resumethumbnail.jpg"></img>
            </div>
        </div>
    );
}
