import React from 'react';
import './style.css'

// const contactButton = document.getElementById("contact-me-button")

const validateEmail = (input) => {
    const emailValidation = "/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/"
    if (!emailValidation.test(input)) {
        alert('Please provide a valid password')
    }
};

export default function Contact() {
    return (
        <div className="body">
            <h3>Contact Me</h3>
            <div className='renderBody row'>
                <form className="form col-5">
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
                    <textarea
                        id="message-input"
                        name="message"
                        type="text"
                        placeholder="Your message"
                    />
                    <button id='contact-me-button' type="button">Submit</button>
                </form>
                <p className='col-5'>
                   This form can be used to reach out to me for any questions, comments, or opportunities you may have. I try to respond by the next business day, so feel free to follow up if you do not hear back from me within 24 hours.
                
                    If you would prefer to reach out to me directly, please feel free to send an email to cleidy.developer@gmail.com

                </p>

            </div>
        </div>
    );
}

// contactButton.addEventListener("click", validateEmail)
