// function contrusctor
function head(size, hair) {
    this.size = size;
    this.hair = hair;
    this.think = function () {
        console.log("smart move");
    }
}

var bighead = new head(200, "black");

//function returning

function Heroj(betmen) {
    return {
        staradi: betmen,


    }
}

console.log(Heroj("hi"));


//zajebavanacija

function person(a, b, c) {
    return function (a,b,c){
            return{
                name: a,
                age: b,
                hair: c,

            }
        }
}


var neske = person();

    console.log(neske("neske",29,"stogod"));