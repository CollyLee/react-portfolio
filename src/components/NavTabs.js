import React from 'react';

function NavTabs({ currentPage, handlePageChange }) {
    return (
        <ul className="nav nav-tabs">

            {/* ABOUT CHANGE HANDLER */}
            <li className="nav-item">
                <a
                    href="#about"
                    onClick={() => handlePageChange('About')}
                    className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
                >
                    About Me
                </a>
            </li>

            {/* PORTFOLIO CHANGE HANDLER */}
            <li className="nav-item">
                <a
                    href="#portfolio"
                    onClick={() => handlePageChange('Portfolio')}
                    className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
                >
                    Portfolio
                </a>
            </li>

            {/* CONTACT CHANGE HANDLER */}
            <li className="nav-item">
                <a
                    href="#contact"
                    onClick={() => handlePageChange('Contact')}
                    // Check to see if the currentPage is `Blog`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
                    className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
                >
                    Contact Me
                </a>
            </li>

            {/* RESUME CHANGE HANDLER */}
            <li className="nav-item">
                <a
                    href="#resume"
                    onClick={() => handlePageChange('Resume')}
                    // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
                    className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
                >
                    View My Resume
                </a>
            </li>
        </ul>
    );
}

export default NavTabs;
