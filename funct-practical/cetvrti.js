function numberHumanizer(num){
    if(num===1){
        console.log(num + "st" );
    }
    if (num === 2){
        console.log(num + "nd");
    }
    if (num === 3){
        console.log(num + "rd");}
        if(num !=1 && num !=2 && num !=3){
            console.log(num +"th");
        }
    }

numberHumanizer(12);
