// const div1 = document.querySelector("div");
// const div2 = document.querySelectorAll("div")[0];
// const ul = document.querySelector("ul"); 
// console.log(ul.textContent);
// console.log(ul.innerHTML);

const body=document.querySelector("body");
const myHeader=document.createElement("h1");
const myP =document.createElement("p");

myHeader.innerText =  "Dom Manipulation";
myP.innerText = "Lorem nnnnnn"

body.append(myHeader,myP);
