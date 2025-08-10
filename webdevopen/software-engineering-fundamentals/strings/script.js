//let str = "nine";
//let str = "9";

// sale error pero si se asigna con var si lo permite
var cadena = "nine";
var cadena = "9";
console.log(cadena);

//let str = nine;

//console.log(str);

//Sting primitive
const message = 'This is my first message ';
//String object
const another = new String('hi');

console.log(typeof message);
console.log(typeof another);

//No puedes cambiar un carácter usando message[0] = 'X'
//  porque los strings son inmutables 
// (no se pueden modificar carácter por carácter).
message.length
message[0]
message.includes('my')
message.startsWith('This')

message.endsWith('e');
message.indexOf('my')
message.replace('first', 'second')

message.toUpperCase()

message.trim()

message.trimStart();

message.split(' ')

console.log(message);