//mapping the value
//creates a new array by performing some operations on each array elements


// // used to display the value, index and array.
let arr=[1, 2, 3, 4]
let a = arr.map((value,index, array)=>{
    console.log(value,index,array);
    return value+1;
})
console.log(arr);
console.log(a);

 
// //mapping for to the sqare of the number
// const numbers = [1,2,3,4];
// let squared= numbers.map(num=>num*num)
//     console.log(squared)
