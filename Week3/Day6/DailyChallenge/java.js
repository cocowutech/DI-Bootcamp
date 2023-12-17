// single loop
let star = "";
let starline = 6; 
for (let i = 1; i <= starline; i++) {
    star += "* ".repeat(i)+ "\n" ;
}
console.log(star);

// nested loop
for(let i = 0; i <= 6; i++){
    let star = " "
    for(let x=0; x<=i;x++){
        star = star + "* "
    }
    console.log(star)
}
