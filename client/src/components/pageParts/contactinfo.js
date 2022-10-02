import React, { useState } from 'react';
import './contactinfo.css';

import { useMutation, gql } from '@apollo/client';

const ADD_CONTACT = gql`
mutation AddContact($name: String!, $email: String!, $message: String!) {
    addContact(name: $name, email: $email, message: $message) {
      name
      email
      message
    }
  }
`
const Contact = () => {
    const [ contactInfo ] = useMutation(ADD_CONTACT);
    const [ contactForm ] = useState({ name: '', email: '', message: ''});

    const handleFormSubmit = async (event) => {
        event.preventDefault();
            await contactInfo ({
                variables: { name: contactForm.name, email: contactForm.email, message: contactForm.message}
            });
    };
    

    return (
        <div className='backgroundColorContact'>
            <form id='contactInfoForm' onSubmit={handleFormSubmit}>
            <div className="mb-3">
                <label className="form-label">Name</label>
                <input type="text" className="form-control" id='formBoxs name' name='name'></input>
            </div>

            <div className="mb-3">
                <label className="form-label">Email</label>
                <input type="email" className="form-control" id='formBoxs email' name='email'></input>
            </div>

            <div className="mb-3">
                <label className="form-label">Message</label>
                <textarea className="form-control" rows="3" id='formBoxs message' name='message'></textarea>
            </div>

            <button type="submit" className="btn btn-primary"><span id='submitButton'>Submit</span></button>
            </form>
        </div>
    )
}

export default Contact;