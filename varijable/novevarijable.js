

var vocals=["a","e","i","o","u"];
var counter = 0;

function vokali(string){
    for(var i = 0; i < string.length; i++){

        for(var j = 0; j < vocals.length; j++)

            if(string[i] === vocals[j]){
                counter++;
            }
    }

    return counter;
    
}

vokali("neske");