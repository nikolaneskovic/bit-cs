
function convertor(string) {
    var array = [];
    var space = null;
    for (var i = 0; i < string.length; i++) {

        if(string[i]== " "){
            array[i] = null;
        }
        else{ 
            array[i] = string[i];
            
        }
        

    }
    return array;
}


convertor("sta ima");