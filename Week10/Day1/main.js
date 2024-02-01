// function getX(){
    // return 5;
// }
// 
// function getY(){
    // return 6;
// }
// 
// function getXY(){
    // let x= getX();
    // let y= getY();
// 
    // console.log(x+y);
// }
// 
// 

const simulateAOp = () => {
 const arr =[
    {username:"aaa",email:"aaa@gmail.com"},
    {username:"bbb",email:"bbb@gmail.com"},
    {username:"ccc",email:"ccc@gmail.com"},
 ];
 return new Promise((res,rej) => {
    setTimeout(() => {
        res(JSON.stringify(arr));

    },2000);
 })
}

simulateAOp = ()
    .then((ret) => {
        render(JSON.parse(ret));
    })

    .catch((err) => {
        document.getElementById("root").innerHTML = err.message
    })

const render =(arr) => {
    
}