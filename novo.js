var chovjek = {
    name: "John",
    surname: "Doe",
    yearOfBirth: 1990,
    occupation: "Killer",
    city: {
        name: "Belgrado",
        area: "Autokomanda",
        street: "Bokeljska",
    }, 
    speak: function(){
        return "I kill you";
    },
    calculateAge: function(){
        return 2017 - chovjek.yearOfBirth;
    }



}

chovjek.speak

