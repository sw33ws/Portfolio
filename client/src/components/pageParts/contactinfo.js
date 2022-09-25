import React from 'react';
import './contactinfo.css';

function Contact(){
    return (
        <div className='backgroundColorContact'>
            <form id='contactInfoForm'>
            <div class="mb-3">
                <label class="form-label">Name</label>
                <input type="text" class="form-control" id='formBoxs'></input>
            </div>

            <div class="mb-3">
                <label class="form-label">Email</label>
                <input type="email" class="form-control" id='formBoxs'></input>
            </div>

            <div class="mb-3">
                <label class="form-label">Message</label>
                <textarea class="form-control" rows="3" id='formBoxs'></textarea>
            </div>

            <button type="submit" class="btn btn-primary"><span id='submitButton'>Submit</span></button>
            </form>
        </div>
    )
}

export default Contact;