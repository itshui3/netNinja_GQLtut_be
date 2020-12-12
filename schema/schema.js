const graphql = require('graphql')
const _ = require('lodash')

const { 
    GraphQLObjectType, 
    GraphQLID,
    GraphQLSchema 
} = graphql

// dummy data
const { books } = require('./books.js')
const { authors } = require('./authors.js')
const { AuthorType, BookType } = require('./objects.js')
// name, age, id

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {

        book: {
            type: BookType,
            args: { 
                id: { type: GraphQLID }
            },

            resolve(parent, args) {

                return _.find(books, { id: args.id })
            }
        },

        author: {
            type: AuthorType,
            args: {
                id: { type: GraphQLID }
            },

            resolve(parent, args) {

                return _.find(authors, { id: args.id })
            }
        }
    }
})

module.exports = new GraphQLSchema({
    query: RootQuery
})