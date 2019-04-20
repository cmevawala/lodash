var after = function (n, fun) {

    let count = 0;

    return function () {
        count++;

        if (count >= n) {
            fun();
        }
    }
}

var saves = ['profile', 'settings'];

var done = after(2, function () {
    console.log('done saving!');
});

saves.forEach(function (type) {
    done();
});