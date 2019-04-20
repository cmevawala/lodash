var update = function (object, path, updater) {
    path = path.replace(/\[(\w+)\]/g, '.$1'); // convert indexes to properties
    path = path.replace(/^\./, ''); // strip a leading dot
    let aryPath = path.split('.');
    let tempObj = object;

    while (aryPath.length > 0) {
        let key = aryPath.shift();

        if (key in tempObj && aryPath.length) {
            tempObj = tempObj[key];
        } else {
            delete tempObj[key];
        }
    }

    return object;
}

var object = {
    'a': [{
        'b': {
            'c': 5
        }
    }]
};
console.log(update(object, 'a[0].b.c', function (n) {
    return n * n;
}));