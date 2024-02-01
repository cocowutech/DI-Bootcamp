// console.log('before')
// for (let i =0; i<5;i++){
//     console.log(i);
// }

// try{
//     console.log(i);
// }

// catch(err){
//     console.log(err.stack);
// }

// console.log('after');
// console.log('after after');


console.log("hi")

// You are tasked with writing a function *solution' that takes a string 's' asinput.
// The string consists of 'a'and/or.'b' characters.
// The function should return 'true' if 
// all occurrences of the letter 'a' appear before all occurrences of the letter 'b' in the string s'.
// If either 'b' does not occur in 's' or 'a' does not occur in 's' , the functionshould also return true .
// Otherwise, it should return  false
// aabb - .true
// bbaa - flase
// aaa - true
// bbb - true
// ababa - flase

// const S = "aabb"
// const subs = "a"
// const subs2 = "b"

// function solution(S){
//     let lastA_index = S.lastIndexOf('a');
//     let firstB_index = S.indexOf('b');
    
//     if (firstB_index === -1 || lastA_index === -1 || lastA_index < firstB_index){
//         return true;
//     }

//     return false;
// }

// console.log(solution(S))

// fetch

// fetch('https://jsonplaceholder.typicode.com/users')
// .then((res) => {
//     console.log(res)
//     return res.json();
// })

// .then((users) => {
//     render (users)
// })

// const render = (arr) => {
//     const html = arr.map((item) => {
//         return '<div> ${item.name} </div>'
//     });
//     document.getElementById('root').innerHTML = html.join('');
// }

// let post ={
//     title:'my great post',
//     body:'my fantastic article',
//     underId:5
// }

// fetch('https://jsonplaceholder.typicode.com/users',{
//     method:'POST',
//     headers:{
//         "Content-type":"application/json",
//     },
//     body:JSON.stringify(post)
// })
// .then(res => res.json())
// .then(data => {
//     console.log(data);
// })


let newuser ={
    name:'Coco',
    email:'coco111@gmail.com',
    username:'coco111'
}

fetch('https://users-18kl.onrender.com/userjson',{
    method:'POST',
    headers:{
        "Content-type":"application/json",
    },
    body:JSON.stringify(newuser)
})
    .then(res => res.json())
    .then(data => {
    console.log(data);
})
    .catch((err) => {
        console.log(err)
    })