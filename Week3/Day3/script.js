console.log(Boolean(1>2));

// === 比较数值和数据种类； == 比较数值 !== 比较数值和数据种类不一致
console.log(Boolean(1===1));

// && 就是 两者都要对 ||是或的关系
console.log(Boolean(1===1 && 1===2));

// Conditions
// let  age=20;
// if (age>18){
//     console.log("You are a big human");
// }

// let  age=17;
// if (age>18){
//     console.log("You are a big human");
// }

//  If ...else ; else if可以在条件里面加小条件
// else{
//     console.log("You are younger or equal to 18")
// }

// let age=prompt("What's your age?")
// if(age<18){
//     console.log("Sorry,you are too young to drive this car.")
// } else if(age ==18){
//     console.log("Congratulations on your first year of driving. Enjoy the ride!")
// }else{
//     console.log("Powering On. Enjoy the ride")
// }

// Switch Case

// Objects
let person ={
    firstName : "John",
    lastName :"Doe",
};

person.firstName ="Sarah";
person.eyeColor = "Blue";
console.log(person)

let user={
    username:"Coco",
    password:"Cocoknows"
};
let database =[user,user];
console.log(database);

let newsfeed=
   [{
        username:"Coco",
        timeline:"0101"
    },
    {
        username:"Coco2",
        timeline:"0102"
    },
    {
        username:"Coco3",
        timeline:"0103"
    }]
;
console.log(newsfeed);

let fruit = "Papayas"
switch (fruit){
    case"Oranges":
    console.log("Oranges are $0.59 a pound.");
    break;
    case"Managoes":
    case"Papayas":
    console.log("Mangoes and papayas are $2.79 a pound.");
    break;
}

// Day5
// For loops
for(let i=0; i<11; i++){
    console.log(i)
}

// Looping Through an Array
let colors = ["red","yellow","black","pink","white"];
for (let i=2; i < colors.length; i++){
    console.log(colors[i])
};

// Exercise 1
for(let i = 0; i<=15;i++){
    if(i%2 ===0){
        console.log(i%2);
        console.log(i + " is an even number")
    }else{
        console.log(i%2);
        console.log(i+" is an odd number")
    }
}

// Exercise 2
let names= ["john", "sarah", 23, "Rudolf",34]