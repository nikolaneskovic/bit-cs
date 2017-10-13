function counter(string,num){
    var result= "";
    for (var i=0; i < num ; i++){
        result = result + string[i]
    }
    return result
}
counter ("hello",3)