(function (){

    function createFlight(relation,date){
        var flight = new Flight(relation, date);
        return flight;
    }

    function createPassenger(name,surname,seat,category){
        var passenger = new Passenger(name,surname, seat, category);
        return passenger;
    }

    var airport = new Airport();

    var flight1 = createFlight("Belgrade - New York", "Oct 25 2017");
    var flight2 = createFlight("Barcelona - Belgrade", "Nov 11 2017");

    var passenger1 = createPassenger("John", "Snow", 1, "b");
    var passenger2 = createPassenger("cersei", "Lannister", 2, "b");
    var passenger3 = createPassenger("Daenerys", "Targearyen", 14);
    var passenger4 = createPassenger("Tyirion", "Lannister");

    flight1.addPassenger(passenger1);
    flight1.addPassenger(passenger2);
    flight2.addPassenger(passenger3);
    flight2.addPassenger(passenger4);

    airport.addFlight(flight1);
    airport.addFlight(flight2);

    console.log(airport.getData());
})();

function Person (name,surname){
    this.name = name;
    this.surname = surname;

    this.getData = function (){
        return this.name + ", " + this.surname;

    }
}

function Seat (number, category){
    this.number = number || Math.floor((Math.random() * 90) + 10);    
    

    if ( category !== "b"){
        this.category = "e"
    }
    else{
        this.category = "b";
    }

    this.getData = function(){
        return this.number + ", " + this.category;
    }

}

function Passenger (name, surname, number, category){
    this.person = new Person(name,surname);
    this.seat = new Seat(number,category);


    this.getData = function(){
        return this.person.getData() + this.seat.getData();
    }
    }

function Flight (relation, date){
    this.relation = relation;
    this.date = date;
    this.list = [];
    this.numOfPassengers = 0;

    this.getData = function (){
        var passengersData = "";
        for (var i = 0; i < this.list.length; i++){
            passengersData += this.list[i].getData() + "\n";
        }
        return this.date + ", " + this.relation + "\n" + passengersData;
    }

    this.addPassenger = function (passenger){
        this.list.push(passenger);
        this.numOfPassengers++;

    
    };


}

function Airport(){
    this.name = "Nikola tesla";
    this.listOfFlights = [];
    this.totalNumPassengers = 0;

    this.addFlight = function (flight){
        this.listOfFlights.push(flight);
    }

    this.getData = function(){
            var flightData = "";
        for(var i = 0; i < this.listOfFlights.length; i++){
            this.totalNumPassengers += this.listOfFlights[i].numOfPassengers;
             flightData += this.listOfFlights[i].getData(); 
        }




        return "Airport:" + this.name + ", "+ "total passengers:" + this.totalNumPassengers + "\n" + flightData

    }
}
