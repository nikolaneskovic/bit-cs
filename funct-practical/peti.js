function counter (recenica,slovo){
    var brojSlova=0;
    for (var i=0; i <= recenica.length; i++){
        if(recenica[i]===slovo){
            brojSlova++;
        }

    }
    return brojSlova;
    
}


var res= counter("ko jebe jebacu ko procita njega cu", "j");
console.log(res);












counter ("jebem mame", "m")