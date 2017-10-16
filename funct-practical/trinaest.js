function konverter(string) {
    var array = [];
    var count = 0;

    for (var i = 0; i < string.length; i++) {
        if (!isNan(parseInt(array[i]))) {

            array[i - count] = parseFloat(array[i]);

    } else {
        count++;
    }



return array;
}

}
konverter("neske1991", 2, 3);