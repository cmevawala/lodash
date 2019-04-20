var concat = function (array, ...args) {

    if (array instanceof Array && array.length) {
        for (let i = 0; i < args.length; i++) {
            if (args[i] instanceof Array) {
                array.push(...args[i]);
            } else {
                array.push(args[i]);
            }
        }
    }

    return array;

}

var array = [1];
var other = concat(array, 2, "string", [3, 4], [[4]]);
console.log(other);