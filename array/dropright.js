var dropRight = function (array, n = 1) {
    let result = [];

    if (array instanceof Array) {

        if (n == 0) {
            result = [];
        }

        if (n > array.length) {
            result = array;
        }

        let i = 0;
        while (i < n) {
            array.pop();
            i++;
        }

        result = array;

    }

    return result;
}

console.log(dropRight([1, 2, 3]));

console.log(dropRight([1, 2, 3], 2));

console.log(dropRight([1, 2, 3], 5));

console.log(dropRight([1, 2, 3], 0));