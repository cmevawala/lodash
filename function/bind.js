var bind = function (func, context, ...outerFunArgs) {
    var that = context;

    return function (...innerFunArgs) {
        return func.apply(that, [...outerFunArgs, ...innerFunArgs]);
    }
}

function greet(greeting, punctuation) {
    return greeting + ' ' + this.user + punctuation;
}

var object = {
    'user': 'fred'
};

var bound = bind(greet, object, 'hi');
console.log(bound('!'));