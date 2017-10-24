


function spajac(niz1, niz2) {
    var niz3 = [];

    niz3[0] = niz1[0];
    niz3[1] = niz2[0];
    for (var i = 0; i < niz1.length; i++) {
        niz3[2 * i] = niz1[i];


    }
    for (var j = 1; j < niz2.length; j++) {
        niz3[2 * j + 1] = niz2[j];


    }


    return niz3;

}


console.log(spajac([1, 2, 3, 4, 5, 6,], ["a", "b", "c", "d", "f", "g"]))