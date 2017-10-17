function vracaljka(num){
    var niz = []
    var rejac = num.toString();

    for (var i = 0 ; i < rejac.length; i++){
        
        niz[i] = parseInt(rejac[i]);

    }
    return niz;
}

console.log(vracaljka (1241351));