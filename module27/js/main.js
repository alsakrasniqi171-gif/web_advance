//funksionet

function showMessage () {
    alert("This message is inside the function")
}

showMessage ();

function sum(number1, number2) {
    return number1 + number2
}

console.log(sum(25,5));



function toCelsius(f) {
    return (5/9) * (f-32);
}

console.log("54 farenheit is equal to" + toCelsius(54) + " celsius");

var result = toCelsius(54);

console.log("54 farenheit is equal to" + result + " celsius");


function dsFunction() {
    var localVar = "Digital School";
    alert(localVar);
}

dsFunction();

//alert(localVar);

function minutes(m) {
    return (m * 60);
}

console.log("3 minutes is equal to " + minutes(3) + " seconds");

//objektet

var car = {
    name:"Mercedes",
    color:"black",
    kilometers: 140000,
    year:2012,
    startEngine : function(){
        alert("Vroommm!!!");
    },
    get getKilometers(){
        return this.kilometers;
    }, 

    set setKilometers(km){
     this.kilometers = km;
    },

    get getColor(){
        return this.color;
    },

    set setColor(newColor){
        this.color = newColor;
    }

}

console.log(car.getKilometers)

car.setKilometers = 150000;

console.log(car.getKilometers)