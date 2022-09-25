const { AuthenticationError } = require('apollo-server-express');

const { Contact } = require('../models');

const resolvers = {
    Query: {
        contacts: async () => {
            return await Contact.find({})
        }
    },
    Mutation: {
        addContact: async (parent, { name, email, message }) => {
            const contact = await Contact.create({ name, email, message });
            return { contact}
        },
    }
}

module.exports = resolvers;