var curry = function (func) {
    let funArgs = [];

    let innerFunction = function (...args) {
        funArgs.push(...args);

        if (funArgs.length === func.length) {
            funArgs.reverse();
            return func(...funArgs);
        } else {
            return innerFunction;
        }
    };

    return innerFunction;
}

var abc = function (a, b, c) {
    return [a, b, c];
};

var curried = curry(abc);
// console.log(curried(3)(2)(1));
// console.log(curried(1, 2, 3));
// console.log(curried(2,3)(1));