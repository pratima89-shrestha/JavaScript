
//promise chain api asyncFunc()
function asyncFunc1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("some data1");
            resolve("suceess!");
            // reject("Error");
        }, 2000);
    })
}


//another api asyncFunc2 which will return the data after 5s/5000ms
function asyncFunc2(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("data2");
            resolve("success.")
        },5000);
    })
}

console.log("Fetching the data1")
let p1 = asyncFunc1();
p1.then((res)=>{
    console.log("res")
})

console.log("Fetching the data2")
let p2 = asyncFunc2();
p2.then((res)=>{
    console.log("res")
})

// p1.catch((err)=>{
// console.log("error")
// })