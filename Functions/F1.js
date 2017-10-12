function add(a,b){
    var sum = a + b; 
    return sum;
}

add (5,20);


function divide(a,b){
    var res = a / b; 
    return res;
}

console.log(divide(20,5));


function equal(a,b){
    if (a===b){
        return true;
    }   
    return false;
}

console.log(equal(5,6));





for (var i=1; i<=100; i++) {
    if (i % 3 === 0 & 5 === 0){
        console.log(i + "FizzBuzz");
} else if( i % 3 === 0) {
       console.log(i+ " Fizz");
} else if( i % 5 === 0) {
        console.log(i + "Buzz");
} else {
        console.log(i);
}

}

