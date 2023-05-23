import React from 'react';
import './style.css'

export default function Contact() {
    return (
        <div>
            <h3>Contact Me</h3>
            <div className='renderBody'>
                <form className="form">
                    <input
                        name="name"
                        type="name"
                        placeholder="Your name"
                    />
                    <input
                        name="email"
                        type="email"
                        placeholder="Best email address to contact you at"
                    />
                    <input
                        name="message"
                        type="text"
                        placeholder="Your message"
                    />
                    <button type="button">Submit</button>
                </form>

            </div>
        </div>
    );
}
