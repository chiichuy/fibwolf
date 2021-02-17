const getFibonacci = (number) => {
    let response = 0;
    if (number > 0) {
        response = fib(0,1,1,number);
    }

    return `"${response}"`;
}

const fib = (previousValue, currentValue, index, upto) => {
    if (index >= upto) {
        return currentValue;
    }

    return fib(currentValue, previousValue+currentValue, index+1, upto);
}

module.exports = { getFibonacci };