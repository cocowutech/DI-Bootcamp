function a(){
    console.log("Hello students of Javascript");
}

function b(){
    a();
}

b()


function greeting(name){
    console.log("Hello, "+ name + ". Welcome to JS lesson");
}

greeting ('John')

const students =["John", "Marry", "Alla"];

for(let i = 0; i < students.length; i++){
    greeting(students[i])
}