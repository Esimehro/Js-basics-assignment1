// In the ‘js-basics’ folder you created above, create a file and name it ‘index.js’. 
// Inside the file, Write a function that multiples two numbers. 
// Call that function to multiply any two numbers of your choice and log the answer in your console.

function multiply(num1,num2){
    return num1 * num2;
}

multiply();
console.log(multiply(20, 5));

// • In the same index.js file, create variables for your first name, last name, 
// Stutern track, skills, favourite color, year of your country’s independence. 
// Use these variables to form a sentence and log the sentence in the console.

let firstName = "Lois";
let lastName = "Omodibo";
let stuternTrack = "Cohort 1.4";
let skills = "JavaScript, HTML & CSS";
let favouriteColor = "Black";
let countryIndependence = "1st October 1960";

console.log("My name is " + firstName +" " + lastName +". " +"I am enrolled at Stutern " + stuternTrack +". " +"I am proficient in " + skills +". " +"My favourite color is " + favouriteColor +". " +"My country, Nigeria gained her independence on " + countryIndependence);
