// console.log
console.log("hello world");
console.log("This is day 1 of javascript");

// Variables
let x=3;
console.log(x);

// let is the key words to define variables.
let a = "Hello";
let b = "World";
let c = a +" "+b;
console.log(c)

// .length is to count how much is the length
let longString=
"lorem fhfijrglksn lk"
let longStringLength = longString.length
console.log(longStringLength)


// String Methods, the position starts from 0. [0]=1st letter
let smallString = "Hello, welcome to JavaScript Day1";
console.log(smallString[2]);

// [数字] 数一共几位字数
// .indexOf("XXXXX") 是在看在哪里开始
// 变量.substring(起始数字，结束数字)
// method是个公式，会产生内容变化(比如toLowerCase)
// property是展示属性（比如.length）

let str = "Hello guys i m falling asleep hello";
let posUppercaseHello = str.indexOf("Hello");
let posLowercaseHello = str.indexOf("hello");
console.log(posUppercaseHello)
console.log(posLowercaseHello)
console.log(str.substring(0,5))
console.log(str.toLowerCase())

// Exercise 1
let addressNumber = 6;
let addressStreet = "Shir";
let country = "Israel";
let globalAddress =  addressStreet+" "+addressNumber+","+" in "+country;
let sentence = " I live in"+" "+globalAddress;
console.log(globalAddress)
console.log(sentence)

// Numbers
console.log("1"+2)
console.log(1+2)

// Number Methods
let op="me";
console.log(isNaN(op));

// Exercise 2
let birthYear = 1998;
let futureYear = 2046;
let age = futureYear - birthYear;
console.log("I will be " + age + " in "+futureYear);

console.log(Boolean(10 < 9));

// Arrays
let user1 = "John";
let user2 = "May";
let user3 = "Nancy";
let users = ["John","Bill","Nancy"];
console.log(users);
console.log(users[0])
console.log(users[1])
console.log(users[2])

// Arrays in arrays

let nestedArrays = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
]
console.log(nestedArrays)
console.log(nestedArrays[0][2])
console.log(nestedArrays.length)

let colors = ["blue","yellow","green"];
console.log(colors)
// 给一个数列换元素
colors[1] = "pink" 
console.log(colors)

// length计算长度；index从0开始

// Array Methods
colors.push("orange");
console.log(colors);
colors.pop();
console.log(colors);

// splice: 在X位 去掉Y个，添加新的元素
colors.splice(1,1,"white")
console.log(colors);

colors.splice(2,1,"snow","man")
console.log(colors);

// slice(X) => 在X位，切成两个数列，X之前；X及其后构成两个数列
// slice(X,Y) => 把X,Y之间切成一个数列
let favorite = colors.slice(1,2);
console.log(favorite);

// toString =>把数列变成文字
let colorstring = colors.toString();
console.log(colors);
console.log(colorstring)

let pets = ["cats", "dogs", "fish","rabbit", "cow"]
console.log(pets[1])
pets.splice(1,3,"rabbit");
console.log(pets)

// console.log("before alert")
// alert("You are not authorized to enter")
// console.log("after alert")

// confirm是看对和错
// let userAnswer=confirm("Are you coco?")
// console.log(userAnswer)

// prompt
// let userAnswer=prompt("What is your username?")
// console.log("Welcome "+userAnswer)