var depth = 1;

var flatten = function (array, deep = 1) {
    let arrayToReturn = [];

    for (let i = 0; i < array.length; i++) {
        if (array[i] instanceof Array && depth == deep) {
            depth++
            arrayToReturn.push(...flatten(array[i]));
        } else {
            arrayToReturn.push(array[i]);
        }
    }

    return arrayToReturn;
}

console.log(flatten([1, [2, [3, [4]], 5]]));
