function konverter(string) {
    var array = [];
    var count = 0;

    for (var i = 0; i < string.length; i++) {
        if (!isNaN(parseInt(array[i]))) {

            array[i - count] = parseFloat(array[i]);

    } else {
        count++;
    }



return array;
}

}
console.log(konverter(["dad",12,31,true,"123"]));