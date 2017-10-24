function alfa (string){
    var slozeno = string.split("").sort();

    return slozeno;
}

console.log(alfa("jebem mame jako"));

//peti

function converter(string){
    var niz = string.split(" ");

    return niz;
}

console.log(converter("jebem mame jako"));


//sesti

function abb(string){
    var niz = []
    for (i = 0; i < 3; i++){
        niz[i] = string[i];
    }

    var nizfinalni = niz.join("");

    return nizfinalni;

    
}

console.log(abb("profesore"));



//sedmi

function dizac(string){

    return string.replace(string[0],string[0].toUpperCase());
  
    
}

console.log(dizac("jebo mamu svoju"));


//deveti



function replace(string){
    
        return string.replace(string,"xxxxxx@gmail.com");

}

console.log(replace("mamatvoja@gmail.com"));