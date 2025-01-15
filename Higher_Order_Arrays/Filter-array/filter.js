//Array filter method
//A fucntion is fiven and if it is ture than it filter that.
//It doesn't change the original array like same arr2 is printed.
let arr2=[12,78,45,34,10,5,6,78];
let arr3 = arr2.filter((a)=>{
    return a<10;
})
console.log(arr3,arr2)
