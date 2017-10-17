function minimax(niz) {

    var min = niz[0];
    var max = niz[0];


    for (var i = 0; i < niz.length; i++) {
        if (niz[i] > max) {
            max = niz[i];

        }
        if (niz[i] < min) {
            min = niz[i];

        }

    }



    return [min, max];
}

console.log(minimax([1, 5, 6, -3, 45]));