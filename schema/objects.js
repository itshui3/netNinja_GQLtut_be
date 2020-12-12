const _ = require('lodash')

const graphql = require('graphql')

const {
    GraphQLObjectType,

    GraphQLID,
    GraphQLString,
    GraphQLInt
} = graphql

const { books } = require('./books.js')
const { authors } = require('./authors.js')


const AuthorType = new GraphQLObjectType({
    name: 'Author',
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        age: { type: GraphQLInt }
    })
})

const BookType = new GraphQLObjectType({
    name: 'Book',
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        genre: { type: GraphQLString },
        author: {
            type: AuthorType,
            resolve(parent, args) {
                console.log('author nested args', args)
                return _.find(authors, { id: parent.authorId })
            }
        }
    })
})

module.exports = { AuthorType, BookType }