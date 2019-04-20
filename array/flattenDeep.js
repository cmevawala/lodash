var flatten = function (array) {
    let arrayToReturn = [];

    for (let i = 0; i < array.length; i++) {
        if (array[i] instanceof Array) {
            arrayToReturn.push(...flatten(array[i]));
        } else {
            arrayToReturn.push(array[i]);
        }
    }

    return arrayToReturn;
}

console.log(flatten([1, [2, [3, [4]], 5]]));
