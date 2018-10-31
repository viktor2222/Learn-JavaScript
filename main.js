//string-concatenation
console.log('Hello'+'World');//Inside a console.log() statement, concatenate the two strings 'Hello' and 'World'
console.log('Hello'+' '+'World');//include a space (' ') between the two words.

//properties
console.log('Teaching the world how to code'.length);//Use the .length property to log the number of characters in the following string to the console

//methods
// Use .toUpperCase() to log 'Codecademy' in all uppercase letters
console.log('Codecademy'.toUpperCase());

// Use a string method to log the following string without whitespace at the beginning and end of it.
console.log('    Remove whitespace   '.trim());

//data-types
console.log('JavaScript');
console.log(2011);
console.log('Woohoo! I love to code! #codecademy');
console.log(20.49);

//comments
console.log('It was love at first sight.');
//Opening line
/*
console.log('The first time Yossarian saw the chaplain he fell madly in love with him.');
console.log('Yossarian was in the hospital with a pain in his liver that fell just short of being jaundice.');
console.log('The doctors were puzzled by the fact that it wasn\'t quite jaundice.');
console.log('If it became jaundice they could treat it.');
console.log('If it didn\'t become jaundice and went away they could discharge him.');
console.log('But this just being short of jaundice all the time confused them.');
*/

//built-in-objects
console.log(Math.random() * 100);//Inside of a console.log(), create a random number with Math.random(), then multiply it by 100.
console.log(Math.floor(Math.random() * 100));//Now, use Math.floor() to make the output a whole number.Inside the console.log you wrote in the last step, put Math.random() * 100 inside the parentheses of Math.floor().
console.log(Math.ceil(43.8));//Find a method on the JavaScript Math object that returns the smallest integer greater than or equal to a decimal number.Use this method with the number 43.8. Log the answer to the console.
console.log(Number.isInteger(2017));//Use the JavaScript documentation to find a method on the built-in Number object that checks if a number is an integer.

//arithmetic-operators
console.log(21 + 3.5);//add 3.5 to your age.
console.log(2018 - 1969);//The answer is how many years it's been since the 1969 moon landing.
console.log(65 / 240);//divide 65 by 240
console.log(0.2708 * 100);//That's the percent of the sun that is made up of helium. Assuming we could stand on the sun, we'd all sound like chipmunks!


//Variables

//Create a Variable: var

//Declare a variable named favoriteFood using the var keyword and assign to it the string 'pizza'.
var favoriteFood = 'pizza';
console.log(favoriteFood);

//Declare a variable named numOfSlices using the var keyword and assign to it the number 8.
var numOfSlices = 8;
console.log(numOfSlices);

//Create a Variable: let

//Create a let variable called changeMe and set it equal to the boolean true.
let changeMe = true;

//On the line after changeMe is declared, set the value of changeMe to be the boolean false.To check if changeMe was reassigned, log the value saved to changeMe to the console
changeMe = false;
console.log(changeMe);

//Create a Variable: const

//Create a constant variable named entree and set it to equal to the string 'Enchiladas'
const entree = 'Enchiladas'

//Just to check that you've saved the value of 'Enchiladas' to entree, log the value of entree to the console.
console.log(entree);
//Great, let's see what happens if you try to reassign a constant variable.Paste the following code to the bottom of your program.entree = 'Tacos'This code throws the following error when you run your code:TypeError: Assignment to constant variable. After you clear this checkpoint, if you want to see about another quirk of const in action open the hint!
entree = 'Tacos'

//Mathematical Assignment Operators

let levelUp = 10;
let powerLevel = 9001;
let multiplyMe = 32;
let quarterMe = 1152;

// Use the mathematical assignments in the space below:
levelUp += 5;
powerLevel -= 100;
multiplyMe *= 11;
quarterMe /= 4;

// These console.log() statements below will help you check the values of the variables.
// You do not need to edit these statements.
console.log('The value of levelUp:', levelUp);
console.log('The value of powerLevel:', powerLevel);
console.log('The value of multiplyMe:', multiplyMe);
console.log('The value of quarterMe:', quarterMe);

//The Increment and Decrement Operator

let gainedDollar = 3;
let lostDollar = 50;

//Using the increment operator, increase the value of gainedDollar.
gainedDollar++;

//Using the decrement operator, decrease the value of lostDollar.
lostDollar--;

//String Concatenation with Variables

//Create a variable named favoriteAnimal and set it equal to your favorite animal.
let favoriteAnimal = 'cat';

//Use console.log() to print 'My favorite animal: ANIMAL' to the console. Use string concatenation so that ANIMAL is replaced with the value in your favoriteAnimal variable.
console.log('My favorite animal: ' + favoriteAnimal + '.');

//String Interpolation

//Create a variable called myName and assign it your name.
const myName = 'Viktor';

//Create a variable called myCity and assign it your favorite city's name.
const myCity = 'Lviv';

//Use a single template literal to interpolate your variables into the sentence below. Use console.log() to print your sentence to the console in the following format:My name is NAME. My favorite city is CITY. Replace NAME and CITY in the string above by interpolating the values saved to myName and myCity.
console.log(`My name is ${myName}. My favorite city is ${myCity}`);

//typeof operator

let newVariable = 'Playing around with typeof.';

//Use console.log() to print the typeof newVariable.
console.log(typeof newVariable);

//Great, now let's check what happens if we reassign the variable. Below the console.log() statement, reassign newVariable to 1.
newVariable = 1;

console.log(typeof newVariable);


//scope
//Blocks and Scope

//At the top of main.js, declare a const variable, named city set equal to 'New York City'. This variable will exist outside of the block.
const city = 'New York City'

//Below the city variable, write a function named logCitySkyline. Write another variable using let named skyscraper and set it equal to 'Empire State Building'.
function logCitySkyline() {
  let skyscraper = 'Empire State Building';

  return 'The stars over the ' + skyscraper + ' in ' + city;
}

console.log(logCitySkyline());

//Global Scope

//At the top of main.js, write three global variables.
const satellite = 'The Moon';
const galaxy = 'The Milky Way';
const stars = 'North Star';

//Below the variables created in the previous step, write a function named callMyNightSky. Inside the function, include a return statement.
function callMyNightSky(){
  return 'Night Sky: ' + satellite + ', ' + stars + ', and ' + galaxy;
};

console.log(callMyNightSky());

//Block Scope

//Within the logVisibleLightWaves() function, using const, create a variable lightWaves and set it equal to 'Moonlight'.
function logVisibleLightWaves() {
  const lightWaves = 'Moonlight';
  console.log(lightWaves);
}

//Call the logVisibleLightWaves() function from outside the function.
logVisibleLightWaves()

//Beneath the function call, log the value of lightWaves to the console from outside the function. You'll notice that it logs a ReferenceError since the variable is tied to the block scope of the function!
console.log(lightWaves);

//Scope Pollution

const satellite = 'The Moon';
const galaxy = 'The Milky Way';
let stars = 'North Star';
//Inside the callMyNightSky() function, on the very first line of the function body, assign the variable stars to 'Sirius'
const callMyNightSky = () => {
  stars = 'Sirius'
	return 'Night Sky: ' + satellite + ', ' + stars + ', ' + galaxy;
};

console.log(callMyNightSky());
console.log(stars);

//Practice Good Scoping

//Inside the function body of logVisibleLightWaves(), beneath the region variable and before the provided console.log() statement, create an if statement that checks if the region is the 'The Arctic'.Beneath the variable in the if block, use console.log() to log the value of the block variable inside the if block.
const logVisibleLightWaves = () => {
  let lightWaves = 'Moonlight';
	let region = 'The Arctic';
  // Add if statement here:
  if (region === 'The Arctic') {
    let lightWaves = 'Northern Lights';
    console.log(lightWaves);
    }

  console.log(lightWaves);
};

logVisibleLightWaves();
