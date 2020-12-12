const express = require('express')
const { graphqlHTTP } = require('express-graphql')

const schema = require('./schema/schema.js')

// express is a function that evalutes to an app
const app = express()

// this will receive a gql request
// we use graphqlHTTP because it will understand the gql req
app.use('/graphql', graphqlHTTP({
    schema: schema,
    graphiql: true
}))

app.listen(4000, () => {
    console.log('listening on port 4000')
})