var valuesIn = function (object) {
    let values = [];

    for (var key in object) {
        values.push(object[key]);
    }

    return values;
}

function Foo() {
    this.a = 1;
    this.b = 2;
}

Foo.prototype.c = 3;

console.log(valuesIn(new Foo));
console.log(valuesIn('hi'));