function logHello() {
    console.log("Hello from a function!");
}
logHello();

let listaDeCampamentos = [
  { number: 1, isReserved: true },  // Ocupado
  { number: 2, isReserved: false }, // Libre
  { number: 3, isReserved: true },  // Ocupado
  { number: 4, isReserved: false }, // Libre
  { number: 5, isReserved: false }  // Libre
];

function availableCampsites(campgrounds){

    let currentlyAvailableCampsites = [];

    for(let i = 0; i< campgrounds.length; i++){

    if (campgrounds[i].isReserved === false){
        currentlyAvailableCampsites.push(campgrounds[i].number);
    }
}
return currentlyAvailableCampsites;
}

let resultados = availableCampsites(listaDeCampamentos);
console.log("Los campamentos disponibles son :", resultados);

function sayHello(name){
    console.log("Hello, " + name + "!")
}

sayHello("George");

let myFriend  = "George";
sayHello(myFriend);

let name = "George";
sayHello(name);