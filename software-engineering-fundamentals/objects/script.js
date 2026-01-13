let gifts = {
    tommy: "stuffed giraffe",
    lisa: "coloring book",
    roberto: "baseball cap",
    beth: "suit of armor",
};

console.log(gifts.tommy)

let actionFigure = {
    name: "Super Awesome Guy",
    heighInCentimeters: 10,
    accessories: ["cape", "dosguise", "laser ring"],
    limitedEdition: true,
};

console.log(actionFigure.name);
console.log(actionFigure.limitedEdition);

let myFavorites = {
    movie: "Shrek",
    song: "Bohemian Rhapsody",
    food: "Lasagna",
};

console.log(myFavorites.movie);
console.log(myFavorites.song);
console.log(myFavorites.food);



// getting information out of an object

let categories = {
        'best picture': 'Shrek',
        'best director': 'Shrek 2'
};

// we can't do these

console.log(categories["best director"]);
categories["best picture"];


// adding a new key/value pair

let myFamily = {
    mon: "Cynthia",
    dad: "Paul",
};

console.log(myFamily.sister = "Lucinda");// dot notation
myFamily["brother in law"] = "Merle";

console.log(myFamily);

myFamily.sister = "Lucinda";

delete myFamily.sister;
console.log(myFamily);



let fruitBasket = {
    apple: "red",
    blackberry: "black",
    orange: "orange",
};


fruitBasket.chirimoya = 'green';
fruitBasket.granadilla = 'ocre';
fruitBasket.mango = 'yellow';

console.log(fruitBasket);

// Dril programming languages

let languages = {
    python: "Guido vanRossum",
};

languages.cobol = 'Grace Hopper';
languages.javascript = "Brendan Eich";
languages.java = 'James Gosling';
languages.swift = "Chris Lattner";

let students = {
    jacob: {
        classes: [
            "math",
            "chemistry",
            "english"
        ],
        grade: 11,
        age: 16,
    },
    guillermo: {
        classes: ["history", "math",
            "physics"],
            grade: 12,
            age:17,
    },
};

let temp;

let partyPeople = [
    { name: "Joe", attending: false},
    { name: "Jasmine", attending: true},
    { name: "Julio", attending: false},
    { name: "Julia", attending: true},
];

/* 
    loop through each item check if the person
    is attending if they are attending, say they are
    partying otherwise, say they are burnt out
*/

for (let i = 0; i < partyPeople.length; i++){
    if (partyPeople[i].attending){
        console.log(partyPeople[i].name + " is partying!");
    } else {
        console.log(partyPeople[i].name + " is burnt out on partying = (");
    }
}

let olympicRecords = {
    athletics100Men: "Justin Gatlin",
    athleticsLongJumMen: 'Mike Powell'
};

let allKeys = Object.keys(olympicRecords);
console.log(allKeys);

let user = {
    name: 'Ana',
    age: 27
};

console.log('name' in user);
console.log('age' in user);
console.log('course' in user);


// Activity
// Initial code

let product = {
    name: 'headphones',
    price: 120,
    doesItWork: false,
    previousOwner: "Bob"
};

// Listing all properties
for (let key in product){
    console.log(`${key}: ${product[key]}`)
}

//Deleting a property
delete product.previousOwner;

//Updating a property
product.doesItWork = true

// Creating a propèrty through a conditional
if (product.price > 100){
    product.discountPercentage = 10
}
// using property values to update other propertues
product.price -= product.price * (product.discountPercentage / 100)

//Cheking if a property exists with a conditional
  if ("discountPercentage" in product) {
  console.log(`We got some ${product.name} on sale for just $${product.price}, that's ${product.discountPercentage}% off!`);
  }
