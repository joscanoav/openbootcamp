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
