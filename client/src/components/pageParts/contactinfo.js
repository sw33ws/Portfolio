import React from 'react';
import './contactinfo.css';

import { useMutation, gql } from '@apollo/client';

const ADD_CONTACT =gql`
mutation Mutation($name: String!, $email: String!, $message: String!) {
    addContact(name: $name, email: $email, message: $message) {
      _id
      name
      email
      message
    }
  }
`
const Contact = () => {
    let name, email, message;
    const [ contactInfo ] = useMutation(ADD_CONTACT);

    return (
        <div className='backgroundColorContact'>
            <form id='contactInfoForm' onSubmit={e => {
                e.preventDefault();
                contactInfo({ variables: { name: name.value, email: email.value, message: message.value }});
            }}>
            <div className="mb-3">
                <label className="form-label">Name</label>
                <input type="text" className="form-control" id='formBoxs' ref={value => name = value}></input>
            </div>

            <div className="mb-3">
                <label className="form-label">Email</label>
                <input type="email" className="form-control" id='formBoxs' ref={value => email = value}></input>
            </div>

            <div className="mb-3">
                <label className="form-label">Message</label>
                <textarea className="form-control" rows="3" id='formBoxs' ref={value => message = value}></textarea>
            </div>

            <button type="submit" className="btn btn-primary"><span id='submitButton'>Submit</span></button>
            </form>
        </div>
    )
}

export default Contact;