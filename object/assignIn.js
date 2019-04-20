var assign = function (object, ...sources) {

    for (let i = 0; i < sources.length; i++) {

        if (sources[i] instanceof Object) {
            for (var key in sources[i]) {
                object[key] = sources[i][key];
            }
        }

    }

    return object;
}

function Foo() {
    this.a = 1;
}

function Bar() {
    this.c = 3;
}

Foo.prototype.b = 22;
Bar.prototype.d = 4;

console.log(assign({'a': 0}, new Foo, new Bar));