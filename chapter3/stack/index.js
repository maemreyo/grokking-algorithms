var factorial = function (x) {
    if (x <= 1)
        return 1;
    return x * factorial(x - 1);
};
console.log(factorial(0));
console.log(factorial(1));
console.log(factorial(2));
console.log(factorial(3));
console.log(factorial(5));
