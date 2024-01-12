// function a(){
//     console.log("Hello students of Javascript");
// }

// function b(){
//     a();
// }

// b()


// function greeting(name){
//     console.log("Hello, "+ name + ". Welcome to JS lesson");
// }

// greeting ('John')

// const students =["John", "Marry", "Alla"];

// for(let i = 0; i < students.length; i++){
//     greeting(students[i])
// }


// const emails = ["John@gmail.com","Marry@gmail.com","Alla@gmail.com"]
// function sum (a,b){
//     console.log(a+b);
// }
// sum(10,15)

// // default value
// function hello(a=1, b=7){
//     console.log('Hello'+ a + " & Hello" +b);
// }
// hello(2,7)


// // local varible
// let age = 15 ;
// // 这个是全局的变量，global var

// function myAge(){
//     let age = 16
//     console.log(age);
// }

// for(var i = 0; i < 5; i++){

// }

// console.log(i)
// // 这个时候出现5

// for(let x = 0; x < 5; x++){

// }

// console.log(x)
//这个时候出现undefined


// 课堂老师代课练习
// function agecombo(MyAge){
//     let mumAge = MyAge * 2;
//     let dadAge = mumAge * 1.2;
//     console.log("My mum is "+mumAge)
//     console.log("My dad is "+dadAge)
// }

// agecombo(25)

// function myA(){
//     return{
//         a:1,
//         b:'John'
//     }
// }
// let a = myA()
// console.log(a.a, a.b);

function myAge(myAge){
    let mom = myAge*2;
    let dad = mom*1.2;
    return[mom,dad]
}
console.log(myAge(24))

function sumMomDad(age){
    let result = myAge(age);
    return result[0] + result[1]
}

let result = myAge(22);
console.log(result);

// Object Method
console.log(this);


let obj = {
    name:'John',
    myAge: function(){
        console.log('my age is 22');
    }
}

console.log(obj.myAge())