var values = function (object) {
    let values = [];

    for (var key in object) {
        if (object.hasOwnProperty(key)) {
            values.push(object[key]);
        }
    }

    return values;
}

function Foo() {
    this.a = 1;
    this.b = 2;
}

Foo.prototype.c = 3;

console.log(values(new Foo));
console.log(values('hi'));