const express = require('express')

// express is a function that evalutes to an app
const app = express()

app.listen(4000, () => {
    console.log('listening on port 4000')
})