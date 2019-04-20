var updateWith = function (object, path, updater) {

    for (let p = 0; p < path.split('.').length; p++) {
        console.log(updateWith);
    }

}

update(object, 'a[0].b.c', function(n) { return n * n; });