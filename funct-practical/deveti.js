function prime(broj) {
    for (var i = 2; i < broj; i++) {
        if (broj % i == 0) {
             console.log("not a prime");

        }
        else {
            console.log("it is a prime")
        }
        return 
    }

}

prime(22)