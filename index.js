const express = require('express')
const app = express()
const port = 3000

const {getFibonacci} = require('./src/fibonacci');

app.get('/', (req, res) => {
    // Validate if req.query.n exists
    if (!req.query.n) {
        throw new Error(`query param 'n' is required ?n=3`) 
    }

    const paramN  = parseInt(req.query.n)
    // Validate if req.query.n is an number
    if (!paramN) {
        throw new Error(`query param 'n' should be a number`) 
    }

    res.send( getFibonacci(paramN) );
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})