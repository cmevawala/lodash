var difference = function (array, ...values) {

    let result = [];
    let spreadedArray = [];

    if (array instanceof Array && array.length) {

        for (let i = 0; i < values.length; i++) {
            if (values[i] instanceof Array) {
                spreadedArray.push(...values[i]);
            }
        }

        var object = {};
        for (let i = 0; i < spreadedArray.length; i++) {
            object[spreadedArray[i]] = !object[spreadedArray[i]] ? 0 : object[spreadedArray[i]]++;
        }

        for (let i = 0; i < array.length; i++) {
            if (!(array[i] in object)) {
                result.push(array[i]);
            }
        }

    }

    return result;
}

console.log(difference([1, 4], [2, 3]));