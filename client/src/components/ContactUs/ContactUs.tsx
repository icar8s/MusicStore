import React from 'react';
import './ContactUs.scss'

export const ContactUs:  () => JSX.Element = () => {
    return (
        <div className="contact-us">
            <h1 className="h1">CONTACT US.</h1>
            <div className="store-hours">
                <h2>Store hours</h2>
                <p>WELCOME BACK</p>
                <p>TEXT</p>
                <h2>CONTACTS</h2>
                <p>pavkap20@gmail.com</p>
                <p>+375 (29) 121-50-11</p>
            </div>
            <div className="card">
                <form className="contact-form">
                    <h2>Contact Form</h2>
                    <label>
                        NAME
                        <input type="text" name="name" required />
                    </label>
                    <label>
                        EMAIL
                        <input type="email" name="email" required />
                    </label>
                    <label>
                        MESSAGE
                        <input type="MESSAGE" name="MESSAGE" required />
                    </label>
                    <button type="submit">SEND MESSAGE</button>
                </form>
            </div>
        </div>
    );
};

ContactUs.meta = {
    route: "contactUs",
    roles: ["admin", "moderator"]
}