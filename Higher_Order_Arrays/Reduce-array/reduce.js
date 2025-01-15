//reducing to the lowest
let arr3= [1,2,3,4,5,6]
let newarr3= arr3.reduce((h1,h2)=>{
    return h1+h2;
})
console.log(newarr3)


// //other way
// let arr3= [1,2,3,4,5,6]
// const reduce_func=(h1,h2)=>{
//     return h1+h2;
// }
// let newarr3= arr3.reduce(reduce_func)
// console.log(newarr3)