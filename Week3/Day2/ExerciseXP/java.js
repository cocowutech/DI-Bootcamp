// Exercise 1
let favoriteFood = "hummus";
let favoriteMeal = "lunch";
let sentence = "I eat " + favoriteFood + " at every " + favoriteMeal
console.log(sentence)

// Exercise 2
const myWatchedSeries = ["black mirror", "money heist", "the big bang theory"];
const myWatchedSeriesLength = myWatchedSeries.length;
const myWatchedSeriesSentence = "I watched " + myWatchedSeriesLength + " series: " + myWatchedSeries.join(", "); 
console.log(myWatchedSeriesSentence)

// Ex2 Part2
myWatchedSeries[2] = "friends";
myWatchedSeries.push("Sex and the City");
myWatchedSeries.unshift("Carrie's Diary"); 
myWatchedSeries.splice(1, 1); 
console.log(myWatchedSeries[1][2]); 
console.log(myWatchedSeries);

// Exercise 3
let celsiusTemperature = 25; 
let fahrenheitTemperature = (celsiusTemperature / 5) * 9 + 32;
console.log(`${celsiusTemperature}°C is ${fahrenheitTemperature}°F`)

// Exercise 4
let c;
let a = 34;
let b = 21;

console.log(a+b) //first expression
// Prediction:55
// Actual:55

a = 2;

console.log(a+b) //second expression
// Prediction:23
// Actual:23

// value of c: undefined 
console.log(3 + 4 + '5');
// Actual:75

// Exercise 5
typeof(15)
// Prediction: number 
// Actual:number 
console.log(typeof(15))

typeof(5.5)
// Prediction: number 
// Actual:number 
console.log(typeof(5.5))

typeof(NaN)
// Prediction:string
// Actual:number
console.log(typeof(NaN))

typeof("hello")
// Prediction:string
// Actual:string
console.log(typeof("hello"))

typeof(true)
// Prediction:boolean
// Actual:boolean
console.log(typeof(true))

typeof(1 != 2)
// Prediction:boolean
// Actual:boolean
console.log(typeof(1 != 2))

"hamburger" + "s"
// Prediction:hamburgers
// Actual:hamburgers
console.log("hamburger" + "s")

"hamburgers" - "s"
// Prediction:hamburger
// Actual:NaN
console.log("hamburgers" - "s")

"1" + "3"
// Prediction:13
// Actual:13
console.log("1" + "3")

"1" - "3"
// Prediction:-2
// Actual:-2
console.log("1" - "3")

"johnny" + 5
// Prediction:johnny5
// Actual:johnny5
console.log("johnny" + 5)

"johnny" - 5
// Prediction:NaN
// Actual:NaN
console.log("johnny" - 5)

99 * "hello"
// Prediction:NaN
// Actual:NaN
console.log(99 * "hello")

1 != 1
// Prediction:false
// Actual:false
console.log(1 != 1)

1 == "1"
// Prediction:true
// Actual:true
console.log(1 == "1")

1 === "1"
// Prediction:false
// Actual:false
console.log(1 === "1")


// Exercise 6
5 + "34"
// Prediction:534
// Actual:534
console.log(5 + "34")

5 - "4"
// Prediction:1
// Actual:1
console.log(5 - "4")

10 % 5
// Prediction:2
// Actual:0
console.log(10 % 5)

5 % 10
// Prediction:5
// Actual:5
console.log(5 % 10)

"Java" + "Script"
// Prediction:JavaScript
// Actual:JavaScript
console.log("Java" + "Script")

" " + " "
// Prediction:  
// Actual:  
console.log(" " + " ")

" " + 0
// Prediction: 0
// Actual: 0
console.log(" " + 0)

true + true
// Prediction:true
// Actual:2
console.log(true + true)

true + false
// Prediction:1
// Actual:1
console.log(true + false)

false + true
// Prediction:1
// Actual:1
console.log(false + true)

false - true
// Prediction:-1
// Actual:-1
console.log(false - true)

!true
// Prediction:false
// Actual:false
console.log(!true)

3 - 4
// Prediction:-1
// Actual:-1
console.log(3 - 4)

"Bob" - "bill"
// Prediction:NaN
// Actual:NaN
console.log("Bob" - "bill")