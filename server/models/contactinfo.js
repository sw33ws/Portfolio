const { mongoose, Schema, model} = require('mongoose');

const contactSchema = new Schema({
    name: {
        type: String,
        // required: true,
        // trim: true,
    },
    email: {
        type: String,
        // required: true,
        // trim: true,
        // This makes sure the string typed in above matchs the email regex 
        // match: [/.+@.+\..+/], 
    },
    message: {
        type: String,
        // required: true,
        // trim: true,
    }
})

const Contact = model('Contact', contactSchema);

module.exports = Contact;