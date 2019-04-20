var clone = function (value) {
    let clonedObject;

    for (var i in value) {
        if (typeof (value[i]) === "object" && typeof (value[i]) === "null") {
            clonedObject[i] = clone(value[i]);
        } else {
            clonedObject[i] = value[i];
        }
    }

    return clonedObject
}

module.exports = clone;