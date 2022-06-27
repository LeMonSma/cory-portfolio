import React, { useState } from "react";
import { validateEmail } from '../../utils/helpers';



function Contact() {
    const [errorMessage, setErrorMessage] = useState('');

    const [formState, setFormState] = useState({ name: '', email: '', message: '' })
    const { name, email, message } = formState

    function handleChange(e) {




        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value)
            console.log(isValid)
            // isValid conditional statement
            if (!isValid) {
                setErrorMessage('Your email is invalid.');
            } else {
                setErrorMessage('');
            }

        } else {
            if (!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required.`);
            } else {
                setErrorMessage('');
            }
        }

        if (!errorMessage) {
            setFormState({ ...formState, [e.target.name]: e.target.value })
        }

        console.log('errorMessage', errorMessage)
    }


    function handleSubmit(e) {
        e.preventDefault();

        console.log(formState)
    }

    return (
        <section className="container">
            <h1>Contact me</h1>
            <form action="https://formsubmit.co/burrisc24@gmail.com" method="POST" id="contact-form" onSubmit={handleSubmit}>
                <div>
                    <label className="" htmlFor="name">Name:</label>
                    <input className='form-control form-control-lg' type="text" defaultValue={name} onBlur={handleChange} name="name" />
                </div>
                <div>
                    <label htmlFor="email">Email address:</label>
                    <input className='form-control form-control-lg' type="email" name="email" defaultValue={email} onBlur={handleChange} />
                </div>
                <div>
                    <label htmlFor="message">Message:</label>
                    <textarea className="form-control" name="message" defaultValue={message} onBlur={handleChange} rows="5" />
                </div>
                {errorMessage && (
                    <div>
                        <p className="error-text">{errorMessage}</p>
                    </div>
                )}
                <button type='submit'>Submit</button>
            </form>
        </section>
    )


}

export default Contact