function replacing(word, replacer) {
    var replacer = replacer || "-";
    var newWord = ' ' ;

    for (var i = 0; i < word.length; i++) {
        if (word[i] === " ") {
            newWord += replacer;
        } else {
            newWord += word[i];
        }


    }
    return console.log(newWord);
}




replacing("reci koji hao", "-")











