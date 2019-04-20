var find = function (array, predicate, fromIndex = 0) {

    for (let i = fromIndex; i < array.length; i++) {
        if (predicate.call(this, array[i])) {
            return array[i];
        }
    };
}

var users = [
    { 'user': 'barney',  'age': 36, 'active': true },
    { 'user': 'fred',    'age': 40, 'active': false },
    { 'user': 'pebbles', 'age': 1,  'active': true }
  ];
   
  console.log(find(users, function(o) { return o.age > 40; }));