var compact = function (array) {

    if (array instanceof Array && array.length) {
        return array.filter(element => {
            if (element !== false && element !== null && element !== undefined && element !== "") {
                return element;
            }
        });
    }

}

console.log(compact([0, 1, false, 2, '', 3]));