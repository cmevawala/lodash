var chunk = function(array, size = 1) {
    let arrayChunks = [];

    if (array instanceof Array && array.length) {
        let tempArray = [];
        let round = 1;
        for (let i = 0; i <= array.length; i++) {
            if (i === (size * round)) {
                arrayChunks.push(tempArray);
                tempArray = [];
                round++;
            }

            if (i === array.length && tempArray.length) {
                arrayChunks.push(tempArray);
            }

            if (array[i]) {
                tempArray.push(array[i]);
            }
        }
    }

    return arrayChunks;
}

console.log(chunk(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'], 4));


[1, [2, [3, [4]], 5]]

1
    2, [3, [4]]
            [3, [4]]
                    [4]
5