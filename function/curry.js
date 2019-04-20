var curry = function (func) {
    let funArgs = [];

    let innerFunction = function (...args) {
        funArgs.push(...args);

        if (funArgs.length === func.length) {
            return func(...funArgs);
        } else {
            return innerFunction;
        }
    };

    return innerFunction;
}

var abc = function (a, b, c) {
    return a + b + c;
};

var curried = curry(abc);
console.log(curried(1)(2)(3));
console.log(curried(1,2,3));
console.log(curried(1,2)(3));