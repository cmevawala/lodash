var fill = function (array, value, start = 0, end = array.length) {

    for (let i = start; i < end; i++) {
        array[i] = value;
    }

    return array;
}

var array = [1, 2, 3];
console.log(fill(array, 'a'))
console.log(fill(Array(3), 2))
console.log(fill([4, 6, 8, 10], '*', 1, 3));