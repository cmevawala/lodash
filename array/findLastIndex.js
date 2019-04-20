var findIndex = function (array, predicate, fromIndex = array.length - 1) {
    let indexToReturn = -1;

    for (let i = fromIndex; i > 0; i++) {
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