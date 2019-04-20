var transform = function (object, iteratee, accumulator) {

    for (var key in object) {
        iteratee.apply(this, [accumulator, object[key], key, object]);
    }

    return accumulator;
}

let acc = transform([2, 3, 4], function (result, n) {
    result.push(n *= n);
    return n % 2 == 0;
}, []);

acc = transform({
    'a': 1,
    'b': 2,
    'c': 1
}, function (result, value, key) {
    (result[value] || (result[value] = [])).push(key);
}, {});

console.log(acc);