'use strict';

(function () {
    function createMovie(movieTitle, movieLength, stringGenre) {
        var genre = new Genre(stringGenre);
        var movie = new Movie(movieTitle, movieLength, genre);
        return movie;
    }

    function createProgram(date) {
        var newProgram = new program(date);
        return newProgram;
    }

    var mfest = new festival('Movie Fest');

    var adults = createProgram("Jan 31 1991");
    var kids = createProgram("May 01 1991");

    var rambo = createMovie("Rambo", 120, "action");
    var ninja = createMovie("ninja", 130, "drama");
    var rocky = createMovie("rocky", 140, "comedy");
    var terminator = createMovie("terminator", 150, "romantic")

    adults.addMovie(rambo);
    adults.addMovie(ninja);
    adults.addMovie(rocky);
    adults.addMovie(terminator);

    kids.addMovie(rambo);
    kids.addMovie(ninja);
    kids.addMovie(rocky);
    kids.addMovie(terminator);

    mfest.addProgram(adults);
    mfest.addProgram(kids);

    console.log(mfest.getData());
})();






function Genre(name) {
    this.name = name || 'none';

    this.getData = function () {
        return this.name[0].toUpperCase() + this.name[this.name.length - 1].toUpperCase();

    }

}

function Movie(title, length, genre) {
    this.title = title;
    this.genre = genre;
    this.length = length;
    this.getData = function () {
        return this.title + ", " + this.length + ", " + this.genre.getData();
    }
}

function program(date) {
    this.date = date;
    this.list = [];
    this.num = 0;
    this.getData = function () {
        var result = '';
        var count = 0;
        for (var i = 0; i < this.list.length; i++) {
            var movie = this.list[i]
            result += "\t\t" + movie.getData() + "\n";
            count += this.list[i].length;
        }

        return this.date + ", " + count + ", " + result;

    }

    this.addMovie = function (movie) {
        this.list.push(movie);
    }
}

function festival(name) {
    this.name = name;
    this.festlist = [];
    this.sum = 0;
    this.getData = function () {
        var result = '';
        for (var i = 0; i < this.festlist.length; i++) {
            var program = this.festlist[i];
            result += program.getData();
            this.sum += this.fest list.length;
        }
        return this.name + ", " + this.sum + "\n\n " + result;
    }

    this.addProgram = function (program) {
        this.festlist.push(program);

    }


}

