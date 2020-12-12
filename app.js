const express = require('express')
const graphqlHTTP = require('express-graphql')

// express is a function that evalutes to an app
const app = express()

// this will receive a gql request
// we use graphqlHTTP because it will understand the gql req
app.use('/graphql', graphqlHTTP({
    // takes in some options in this object
    
}))

app.listen(4000, () => {
    console.log('listening on port 4000')
})