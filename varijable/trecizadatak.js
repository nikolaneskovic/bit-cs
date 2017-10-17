function rotaljka(array, times) {
    var final = [];

    for (var i = times; i < array.length; i++) {
        final[i - times] = array[i];
    }
    for (var j = 0; j < times; j++) {
        final[array.length - times + j] = array[j];
    }

    return final;
}

console.log(rotaljka([1, 2, 3, 4, 5, 6], 3));