// Hour
// If hour is between 6am and 12pm: Good morning!
// if it is between 12pm and 6pm: Good afternoon!
//Otherwise: Good evening;

let hour = 1;

/*✅ Una sola línea → llaves opcionales. */
if(hour >= 6 && hour < 12) 
    console.log('Good morning');
else if (hour >= 12 && hour < 18)
    console.log('Good afternoon');
else
    console.log('Good evening')
//  si intentas comparar un número con una cadena, intentará convertir la cadena en un número.
7 === "7";
7 == "7"

// ceil para redondear y se multiplica porque es el valor que pide.
let random = Math.ceil(Math.random()*6);

if (random === 1){
    console.log("The random number was 1");
} else if (random === 2){
    console.log("The random number is 2")
} else if (random === 6){
    console.log("The random number is 6");
} else {
    console.log("The random number was not 1, 2 or 6.Unlucky.")
}

// assignment (one equal sign)
let currentForecast = "sunny";

// equality comparison (three equal signs)
if (currentForecast === "rain"){
    let recommendation = "Bring your umbrella!";
}

// Mistake alert!
// Only one equals sign,
// means that this assigns 'rain' to currentForecast

if (currentForecast = "rain"){
    let recommendation = "Bring your umbrella!";
}

// BIG SPENDER

let sales = 1500;
let inventoryCost = 1200;
let monthlySummaryMessage = "";

if (sales> inventoryCost){
    monthlySummaryMessage = "We made more than we spent"
}
if (sales < inventoryCost) {
    monthlySummaryMessage = "Opps, spent more than we made"
}

if (sales == inventoryCost) {
    monthlySummaryMessage = "We broke even! Hurray!"
}

console.log(monthlySummaryMessage);

// Else if

let loginCount = 3;
if (loginCount > 10){
    console.log("That's a lot of logins today, champ! Maybe give it a rest.");
}
else if (loginCount > 0){
    console.log("Thanks for logging in!");
}
else {
    console.log("Don't forget to log in today")
}

// Order of operations
/*
Operator precedence
1. Paraentheses (())
2. Exponents (**)
3. Multiplication (*)
4. Division (/)
5. Addition (+)
6. Subtraction (-)
*/

if(!5 - 4 > 2 === 2 * 10 / 5 === 4){
    console.log("the expression was truthy")
} else {
    console.log("it was falsy");
}

console.log(!5)
console.log(!5-4)
console.log(4>2)
