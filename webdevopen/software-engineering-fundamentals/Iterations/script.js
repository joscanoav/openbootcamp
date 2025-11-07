let countTo = 5;
for (let step = 1; step <= countTo; step++){
    console.log(step);
}

let numberOfGuests= 20;
for (let index = 1; index <= numberOfGuests; index++){
    console.log("Here is a 🍔 for guest #" + index);
}

//**   Drill : Loop practice */

let number = 10;
for(let i = 1; i <= number; i++){
    console.log(i);
}

let n = 10;
for (let i=5; i <= n;i++ ){
    console.log(i);
}

let x = 100;
for(let i = 0; i <= x; i=i+10){
    console.log(i);
}


let partyPeople = ["Joe", "Julie", "Jasmine", "Julio"];

for (let i = 0; i < partyPeople.length;i++){
    console.log(partyPeople[i] + " Likes to party!");
}

console.log(partyPeople.length);

// don't modify these variables

let snackEatenPerDay = [3, 2, 5, 6, 1, 2, 2, 4, 8, 2, 5, 3, 3, 1];

let totalSnacksEaten = 0;

for (let i = 0; i < snackEatenPerDay.length;i++){
    totalSnacksEaten = snackEatenPerDay[i] + totalSnacksEaten;
}
console.log(totalSnacksEaten);


let mixedArray = [9, "six", true, 18];
//prints the values of the items in the mixedArray
console.log("Priting each item...");
for ( let i = 0; i < mixedArray.length; i++){
    console.log(mixedArray[i]);
}

//prints a formatted string depending on item type
console.log("Priting formatted string with item type ...");
for ( let i = 0; i< mixedArray.length;i++){
    if(typeof mixedArray[i] == "number"){
        console.log("The item at position " + i + " is a number: " + mixedArray[i]);
    }

    if(typeof mixedArray[i] == "string"){
        console.log("The item at position " + i + " is a string: " + mixedArray[i]);
    }

    if(typeof mixedArray[i] == "boolean"){
        console.log("The item at position " + i + " is a boolean: " + mixedArray[i]);
    }
}

for (let i = 1; i<=30; i++){
    if(i === 21){
        console.log("TWENTY ONE! Black Jack, dale!");
            break;
    } else {
        console.log(i);
    }
}


for (let i = 1; i <= 30; i++){
    if(i % 3 === 0){
        continue;
    }
    console.log(i);
}