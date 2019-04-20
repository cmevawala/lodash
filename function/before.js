var before = function (n, fun) {

    let count = 0;

    return function () {
        count++;

        if (count <= n) {
            fun();
        }
    }
}

var saves = ['profile', 'settings'];

var done = before(saves.length, function () {
    console.log('done saving!');
});

saves.forEach(function (type) {
    done();
});