// Exercises XP

// Exercise1
// #1
function funcOne() {
    let a = 5;
    if(a > 1) {
        a = 3;
    }
    alert(`inside the funcOne function ${a}`);
}
// #1.1 - run in the console:
// funcOne()
// A1.1:it will show alert (`inside the funcOne function 3`)because a>1.

// #1.2 What will happen if the variable is declared 
// with const instead of let ?
// A1.2:it will show err because we can't reassign variable with const.

//#2
let a = 0;
function funcTwo() {
    a = 5;
}

function funcThree() {
    alert(`inside the funcThree function ${a}`);
}

// #2.1 - run in the console:
// funcThree()
// A2.1 alert(`inside the funcThree function 0);

// funcTwo()
// A2.1 a = 5

// funcThree()
// A2.1 alert(`inside the funcThree function 5);

// #2.2 What will happen if the variable is declared with const instead of let ?
// A2.2 It will show err because we can't reassign variable with const.

//#3
function funcFour() {
    window.a = "hello";
}

function funcFive() {
    alert(`inside the funcFive function ${a}`);
}

// #3.1 - run in the console:
// funcFour()
// A3.1 gonna show window.a:'hello'
// funcFive()
// A3.1 gonna show inside the funcFive function 0

//#4
let a = 1;
function funcSix() {
    let a = "test";
    alert(`inside the funcSix function ${a}`);
}

// // #4.1 - run in the console:
// funcSix()
// A4.1 going to show : inside the funcSix function test

// // #4.2 What will happen if the variable is declared 
// // with const instead of let ?
// A4.1 going to show : inside the funcSix function test because we are recreating a new variable inside the function.

//#5
let a = 2;
if (true) {
    let a = 5;
    alert(`in the if block ${a}`);
}
alert(`outside of the if block ${a}`);

// #5.1 - run the code in the console
// A5.1 going to show in the if block 5, outside of the if block 2.

// #5.2 What will happen if the variable is declared 
// with const instead of let ?


// Exercise2
// function winBattle(){
//     return true;
// }

const winBattle = ()=> true;

const experiencePoints = winBattle() ? 10 : 1
console.log(experiencePoints)

// Exercise3
const isString = (sth) => { typeof(sth) === 'string' ? true : false; }
console.log(isString('hello')); 
//true
console.log(isString([1, 2, 4, 0]));
//false

// Exercise4
let colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
for (let i =0; i < colors.length; i++){
    const color = colors[i];
    console.log("# " + Number(i+1) + 'choice is '+color)
}


let colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
for (let i =0; i < colors.length; i++){
    const color = colors[i];
    console.log (`${i+1} # choice is ${color}`)
}

// Exercise5
const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
const ordinal = ["th","st","nd","rd"];
    
for (let i =0; i < colors.length; i++){
    const color = colors[i];
    if (i < 3){
        console.log (`${i+1}${ordinal[i+1]} choice is ${color}.`)
    } else {
        console.log (`${i+1}${ordinal[0]} choice is ${color}.`)
    }
}

// Exercise 6
// In this exercise, you have to decide which type of variables you have to use (ie. let or const):
// Create a global variable called bankAmount which value is the amount of money currently in your account.
let bankAmount = 0;
// Create a variable that saves the % amount of VAT (In Israel, it’s 17%).
const VAT = 0.17;
// Create an array with all your monthly expenses, both positive and negative (money made and money spent).
const details = ['+200','-100','+250','-300']
// Example : const details = ["+200", "-100", "+146", "+167", "-2900"]
function bill(expenses){
    let total = 0;
    expenses.forEach((expense) => {
        const numExpense = Number(expense)
        const expenseWithVat = numExpense * (1 + VAT);
        total = total + expenseWithVat
    });
    return total
}
console.log(bill(details))
// Create a program that modifies the expenses (ie. the positive AND the negative expenses) so that they will include taxes (multiply each expense by the VAT).
// Display your current bankAccount standing at the end of the month.