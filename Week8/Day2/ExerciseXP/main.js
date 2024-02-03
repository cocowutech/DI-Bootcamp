// Exercise1
const sum = (a,b)=>{return (a+b)}
console.log(sum(2,3))

// Exercise2 
// Create a function that receives a weight in kilograms and returns it in grams. 
// (Hint: 1 kg is 1000gr)
// First, use function declaration and invoke it.
function kiloGramsConvert (a){
    console.log (a*1000);
}
kiloGramsConvert(2);

// Then, use function expression and invoke it.
const kiloToGrams = function (a){
    console.log (a*1000);
}
kiloToGrams(2)

// Write in a one line comment, the difference between function declaration and function expression.
// function declaration can be used before it's declared. func expression can only be used after.

// Finally, use a one line arrow function and invoke it.
const kiloToGrams2 = (a) => {console.log (a*1000);}

// Exercise 3 : Fortune Teller
// Create a self invoking function that takes 4 arguments: number of children, partner’s name, geographic location, job title.
// The function should display in the DOM a sentence like "You will be a <job title> in <geographic location>, and married to <partner's name> with <number of children> kids."
(function(kidNumber,name,location,job){
    const msg = `You will be a ${job} in ${location}, and married to ${name} with ${kidNumber} kids.`;
    document.querySelector(".show").innerText = msg;
})(3,'Harry','New York','Business Anaylst');

// 🌟 Exercise 4 : Welcome
// John has just signed in to your website and you want to welcome him.
// Create a Bootstrap Navbar in your HTML file.
// In your js file, create a self invoking funtion that takes 1 argument: the name of the user that just signed in.
// The function should add a div in the nabvar, displaying the name of the user and his profile picture.

(function(userName){
    const pic = "1-intro-photo-final.jpg"; 
    const userDiv = document.createElement('div');
    userDiv.className = 'navbar-text';

    userDiv.innerHTML = `
    <img src="${pic}" alt="Profile Picture" style="width: 30px; height: 30px; border-radius: 50%; margin-right: 10px;">
    Welcome, ${userName}`;

    document.getElementById('userProfileSection').appendChild(userDiv);
})('John'); 


// 🌟 Exercise 5 : Juice Bar
// You will use nested functions, to open a new juice bar.
// Part I:
// The outer function named makeJuice receives 1 argument: the size of the beverage the client wants - small, medium or large.
// The inner function named addIngredients receives 3 ingredients, and displays on the DOM a sentence like The client wants a <size drink> juice, containing <first ingredient>, <second ingredient>, <third ingredient>".
// Invoke the inner function ONCE inside the outer function. Then invoke the outer function in the global scope.
function makeJuice (juiceSize) {
    let first,second,third;

    function addIngredients (fruit, fruit2, milk){
        first = fruit;
        second = fruit2;
        third = milk;
    }
    addIngredients('mango','banana','milk');
    
    const order =  `The client wants a ${juiceSize} juice, containing ${first},${second}, ${third}.`;
    document.querySelector(".juice").innerText = order;
}
makeJuice('big')

// Part II:
// In the makeJuice function, create an empty array named ingredients.
// The addIngredients function should now receive 3 ingredients, and push them into the ingredients array.
// Create a new inner function named displayJuice that displays on the DOM a sentence like The client wants a <size drink> juice, containing <first ingredient>, <second ingredient>, <third ingredient>".
// The client wants 6 ingredients in his juice, therefore, invoke the addIngredients function TWICE. Then invoke once the displayJuice function. Finally, invoke the makeJuice function in the global scope.
function makeJuice (juiceSize) {
    let ingredients =[];

    function addIngredients (fruit1, fruit2, milk){
        ingredients.push(fruit1,fruit2,milk)
    }
    addIngredients("apple","banana","soya");
    addIngredients("orange", "pear", "almond milk");
    console.log(ingredients)

    function displayJuice(juiceSize,ingredients){
    const order =  `The client wants a ${juiceSize} juice, containing ${ingredients.join(", ")}.`;
    document.querySelector(".juice").innerText = order;
    }
    displayJuice(juiceSize,ingredients);
}
makeJuice('big')