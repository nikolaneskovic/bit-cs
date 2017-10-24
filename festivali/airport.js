'use strict';

(function () {
    console.log("hi");
    var nikola = new Passenger(new Person("Nikola", "Neskovic"), new Seat(55,"e"));
    
}());

function Person(name, surname) {
    this.name = name;
    this.surname = surname;

}

function Seat(number, category) {
    this.number = number;
    this.category = category;
    

}
function Passenger(personObj, seatObj) {
    this.person = personObj;
    this.seat = seatObj;

}

function Flight(relation, date, listPassenger) {
    this.relation = relation;
    this.date = date;
    var list = [];
    this.getData() = function () {
        return this.relation
    }

}

function Airport(name, listFlights) {
    this.name = "Nikola Tesla";
    this.listFlights = listFlights;

}

