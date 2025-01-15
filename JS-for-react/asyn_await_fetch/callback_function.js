//callback function
//It is function of argument to another function
//when another function is called inside another fucntion

function sum(a,b){
    console.log(a+b);
}
function calculator(a,b,sumCallback){
    sumCallback(a,b);   
}

calculator(1,2,(a,b)=>{
console.log(a+b)
})

//hello is callback function
//callback function and setTimeout
const hello=()=>{
    console.log("hello");
}
setTimeout(hello,5000);



