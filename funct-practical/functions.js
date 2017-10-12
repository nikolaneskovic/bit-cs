function isString(a){

    if (typeof (a) === 'string') {
            console.log("True");
        return true;}
    if (typeof (a) === 'number') {
            console.log("false");
        return false;}
}

isString(123);