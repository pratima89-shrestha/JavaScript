//callback hell 
//nested callbacks stacked below one another forming a pyramid structure
//the style of programming becomes difficult to understand and image

//nested if else
let age=19;
if(age>=45){
    if(age>=60){
        console.log("senior");
    }
    else{
        console.log("middle");
    }
}
else{
    console.log("child");
}


//nested loop
//writing for loop under another for loop
for(let i=0;i<5;i++){
    let str="";
    for(let j=0;j<5;j++){
        str=str+j;
    }
        console.log(i,str);
    }



//  //trying the access the data from the database
// function getData(dataId){
//     setTimeout(()=>{
//         console.log("data",dataId);
//     },2000)
// }

// getData(1);
// getData(2);
// getData(3);


//callbacks to tell the specific getting like if username is wrong say username wrong.
function getData(dataId, getNextData){
    setTimeout(()=>{
        console.log("data",dataId);
        getNextData();
    },2000);
}

getData(1,()=>{
    getData(2);
});

//lecture 12/29:04 resume




