var findIndex = function (array, predicate, fromIndex = 0) {
    let indexToReturn = -1;

    for (let i = fromIndex; i < array.length; i++) {
        if (predicate.call(this, array[i])) {
            indexToReturn = i;
            break;
        }
    };

    return indexToReturn;
}

var users = [
    { 'user': 'barney',  'active': false },
    { 'user': 'fred',    'active': false },
    { 'user': 'pebbles', 'active': true }
  ];

console.log(findIndex(users, function(o) { 
    return o.user == 'pebbles'; 
}))