var toPairs = function (object) {
    let array = [];

    for (var key in object) {
        array.push({
            [key]: object[key]
        })
    }

    return array;
}

function Foo() {
    this.a = 1;
    this.b = 2;
}

Foo.prototype.c = 3;

console.log(toPairs(new Foo));