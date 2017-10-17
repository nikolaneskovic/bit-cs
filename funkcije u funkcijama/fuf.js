function multiply(a, b, square) {
    var arr = [];

    for (var i = 0; i < arguments.length - 1; i++) {
        var element = (arguments[i] * 2) * (arguments[i] * 2);
        var squareElement = square(element)
        arr[i] = squareElement;
    }
    return arr;
}


function add(num) {
    return num + 1;
}

function divide(num){
    return num / 10;
}

console.log(multiply(2, 4, add));



function newTask(arr, callback1, callback2) {
    for (var i = 0; i < arr.length; i++) {
        var element = callback2(callback1(arr[i]));
        arr[i] = element;
    }
    return arr;
}

console.log(newTask([5, 10, 20, 11], add, divide));


