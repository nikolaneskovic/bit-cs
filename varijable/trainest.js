function veca(num){

    var sum = 0; 
    var avg = 0;
    var result = [];
    

    for (var i = 0; i < arguments.length; i++){
        sum += arguments[i]; 
        avg =  sum / arguments.length;   

        if (arguments[i] > avg){
            result[i]=arguments[i];
               
        }
        
    }
    console.log(result);
    console.log(sum);
    console.log(avg);


return sum;




}

console.log(veca(1,2,3,5,6,7,8));