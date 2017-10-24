function changeBase (num, base1, base2){

     var conv = parseInt(num, base1);
     return conv.toString(base2);

}

console.log(changeBase("sa123",10,2));


//drugi zadatak

function reverse(num){

    var string = num.toString();
  

    var array = [];
    
    for ( var i = 0; i < string.length; i++ ){

        array[i] = string[i];
    }
    var reverseArr = array.reverse();
    var spojen = array.join("");

    return  spojen;
}

console.log(reverse(523));