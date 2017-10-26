"use strict";
function Country(cName, odds, continent) {
    this.cName = cName;
    this.odds = odds;
    this.continent = continent;
};

var continents = Object.freeze({
    EUROPE: "EU",
    AUSTRALIA: "AU",
    AFRICA: "AF",
    SOUTHAMERICA: "SA",
    NORTHAMERICA: "NA",
    ASIA: "AS",
});



function Person(name, surname, dateOfBirth) {
    this.name = name;
    this.surname = surname;
    this.dateOfBirth = dateOfBirth;
}

Person.prototype.getData = function () {
    var datum = new Date(this.dateOfBirth).getDate() + ": " + new Date(this.dateOfBirth).getMonth() + ", " + new Date(this.dateOfBirth).getFullYear();

    return this.name + " " + this.surname + ", " + datum;
};

function Player(name, surname, dateOfBirth, betAmount, cName, odds, continent) {
    this.person = new Person(name, surname, dateOfBirth);
    this.betAmount = betAmount;
    this.country = new Country(cName, odds, continent);
}

Player.prototype.getData = function () {
    var yearsNow = 2017 - this.person.dateOfBirth;
    return this.country.cName[0] + this.country.cName[1] + ", " + this.betAmount * this.country.odds + " EUR" + ", " + this.person.name + " " + this.person.surname + ", " + yearsNow;
};

function Address(cName, odds, continent, city, postalCode, street, number) {
    this.country = new Country(cName, odds, continent);
    this.city = city;
    this.postalCode = postalCode;
    this.street = street;
    this.number = number;
}

Address.prototype.getData = function () {

    return this.street + " " + this.number + ", " + this.postalCode + " " + this.city + ", " + this.country.cName[0] + this.country.cName[1];
};


function BettingPlace(cName, odds, continent, city, postalCode, street, number) {
    this.country = new Country(cName, odds, continent);
    this.city = city;
    this.postalCode = postalCode;
    this.street = street;
    this.number = number;
    
    
    this.listOfPlayers = [];

}

BettingPlace.prototype.getData = function () {
    var counter = 0;
    for (var i = 0; i < this.listOfPlayers.length; i++) {
        counter += (this.listOfPlayers[i].betAmount * this.listOfPlayers[i].country.odds);

    }
    
    return this.street + " " + this.postalCode + ", " + this.city + "; " + "sum of all bets: " + counter +  " EUR";
};

BettingPlace.prototype.addPlayer = function (player) {
    this.listOfPlayers.push(player)

};



function BettingHouse(competition) {
    this.competition = competition;
    this.listOfBettingPlaces = [];
    this.numberOfPlayers = 0;

}

BettingHouse.prototype.addPlace = function (bettingplace) {
    this.listOfBettingPlaces.push(bettingplace);
    
};


BettingHouse.prototype.getData = function () {
    var counter = 0;
    for (var i = 0; i < this.listOfBettingPlaces.length; i++) {

        counter += this.listOfBettingPlaces[i].listOfPlayers.length;
    }
    this.numberOfPlayers = counter;
    var prvired =  this.competition + ", " + this.listOfBettingPlaces.length + " " + "betting places" + ", " + this.numberOfPlayers + " bets";
        var trecired = "";
        var drugired = "";
        var drugiitreci = "";
        for ( var i = 0 ; i < this.listOfBettingPlaces.length; i++){
            drugiitreci += "\n" + "\t" + this.listOfBettingPlaces[i].getData();
            
            for ( var j = 0 ; j < this.listOfBettingPlaces[i].listOfPlayers.length; j++){
                var novo = this.listOfBettingPlaces[i].listOfPlayers[j];
                drugiitreci += "\n" + "\t\t" + this.listOfBettingPlaces[i].listOfPlayers[j].getData(); + "\n";
            }
            

                
        }
        return prvired + " " + "\n" + "\t" + "\t" + drugiitreci + "\t";
};




(function () {
    function createPlayer(name, surname, dateOfBirth, betAmount, cName, odds, continent) {
        var player = new Player(name, surname, dateOfBirth, betAmount, cName, odds, continent)
        return player;
    }

    function createBettingPlace(cName, odds, continent, city, postalCode, street, number) {
        var kvota = new Country(cName, odds, continent);
        var bettara = new BettingPlace(kvota.cName, kvota.odds, kvota.continent, city, postalCode, street, number)
        return bettara;
    }

    var srki = createPlayer("Srki", "Popovic", 1991, 15150, "Serbia", 12, "NA");
    var sone = createPlayer("Sone", "Radovanovic", 1992, 2500, "USA", 7, "SA");
    var neske = createPlayer("Neske", "Neskovic", 1991, 100000, "Thailand", 13, "AS");
    var dado = createPlayer("Dado", "Njemac", 1988, 6000, "Austria", 18, "EU");

    var mozzart = createBettingPlace(neske.cname, neske.odds, neske.continent, "Sabac", "15000", "Ljubinska", 5);
    var milenium = createBettingPlace(srki.cName, srki.odds, srki.continent, "Beograd", "11000", "Bokeljska", 7);

    mozzart.addPlayer(dado);
    milenium.addPlayer(sone);
    mozzart.addPlayer(srki);
    milenium.addPlayer(neske);

    var neskexopen = new BettingHouse("Penthouse open 17");

    neskexopen.addPlace(mozzart);
    neskexopen.addPlace(milenium);

   
    console.log(neskexopen.getData());

}());