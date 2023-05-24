import React from 'react';
import './style.css'

export default function Contact() {
    return (
        <div className="body">
            <h3>Contact Me</h3>
            <div className='renderBody row'>
                <form className="form col-6">
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
                <p className='col-5'>
                Elizabeth Bennet had been obliged, by the scarcity of gentlemen, to sit down for two dances; and during part of that time, Mr. Darcy had been standing near enough for her to hear a conversation between him and Mr. Bingley, who came from the dance for a few minutes, to press his friend to join it.   
                </p>

            </div>
        </div>
    );
}
