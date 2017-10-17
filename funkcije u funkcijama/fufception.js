







function newTask(arr, callback1, callback2) {
    for (var i = 0; i < arr.length; i++) {
        var element = callback2(callback1(arr[i]));
        arr[i] = element;
    }
    return arr;
}

console.log(newTask([5, 10, 20, 11], add, divide));