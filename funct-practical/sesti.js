function firstOccurence(recenica, slovo) {
    var redniBroj = 0;
    for (var i = 0; i <= recenica.length; i++) {
        if (recenica[i] === slovo) {

            return i + "th";
        }

    }
    return "-1";

}



var res = firstOccurence("jabuka", "a");
console.log(res);