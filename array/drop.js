var drop = function (array, n = 1) {
    let result = [];

    if (array instanceof Array) {

        if (n == 0) {
            result = [];
        }

        if (n > array.length) {
            result = array;
        }

        for (let i = 0; i < array.length; i++) {
            if (i >= n) {
                result.push(array[i]);
            }
        }

    }

    return result;
}

console.log(drop([1, 2, 3]));

console.log(drop([1, 2, 3], 2));

console.log(drop([1, 2, 3], 5));

console.log(drop([1, 2, 3], 0));