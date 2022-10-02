const { Contact } = require('../models');

const resolvers = {
    Query: {
        contacts: async () => {
            return await Contact.find({})
        }
    },
    Mutation: {
        addContact: async ( parent, { name, email, message }) =>{
            return await Contact.create({ name, email, message })
          },
    }
}

module.exports = resolvers;