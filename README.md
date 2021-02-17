# fibwolf

## About it
This application was developed with nodejs and express-js, 
`index.js` contains the express configuration, with his get request, 

    app.get('/', (req, res) => {
        if (!req.query.n) {
            throw new Error(`query param 'n' is required ?n=3`) 
        }

        const paramN  = parseInt(req.query.n)
        if (!paramN) {
            throw new Error(`query param 'n' should be a number`) 
        }

        res.send( getFibonacci(paramN) );
    })

this GET route, is calling `getFibonacci` function, you can find this function under `src/fibanacci.js` file, this file contains two functions, 

### `getFibonacci` 
This function validates if the number is 0, if number is greater than 0 it will be call `fib` function

### `fib`
This function runs recursive, it needs 4 parameters, `previousValue`, `currentValue`, `index` works as counter starting from 1 also is helping to avoid inifnite loops and  `upto` this is the limit of our loop.

## Installation
>npm install

## Run it
> npm start

## Test it 
> http://localhost:3000/?n=2
