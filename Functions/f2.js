function Print(message) {
    console.log(message);
}

function d5(num) {
    if (num % 5 === 0) {
        return true;
    }
    else {
        return false;

    }
}


    function d3(num) {
        if (num % 3 === 0) {
            return true;
        }
        else {
            return false;
        }
}



    function FB(brojOd, brojDo) {
        for (test = brojOd; test <= brojDo; test++) {
        
            if (d3(test)){
                Print(test + "Fizz");
            }
            if (d5(test)){
                Print(test + "Buzz");
            }
            if (d3(test) && d5(test)){
                Print(test + "FizzBuzz");
            }
        
        }
    }


        FB(10,50);

