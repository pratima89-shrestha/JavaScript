
//yt.pedroTech.
/*function
const
components
button
ternary operator
destruction of objects/Destructuring
array
map()
filter()
*/
export default function DoSomething(){
}
export DoSomething=()=>{

}

// // This is a React functional component named MyComponent.
// // It serves as a template for rendering a simple <div> element.
// // You can customize this component by adding JSX elements or logic as needed.
const MyComponent = () => {
    return (
        <div>
            
        </div>
    )
}

//button creation
{<button onClcik={()=>{ //define the function inline with anonymous function without declaring a function
    console.log("Hello World!");
}}>Click me!</button>}

//alternative for if else using ternary operator
let age= 10;
let name= "Pratima";
if(age>10){
    console.log("Name is Pratima");
}
else{
    console.log("Name is not Preeti")
}


//ternary operator
let age=10;
let name=age>10? "Pratima":"Preeti";

const Component =()=>{
 return age>10?<div>Pedro</div>:<div>Jack</div>
}


//objects are very useful and important
//being able to destructure object
const person={
    name:"Pratima",
    age:20,
    isMArried:false,
}

const name=person.name
const age=person.age
const isMarried = person.isMArried
//this can be written in single line by using the destructuring
const {name,age,isMArried}=person;




//other object
cosnt name1="Pratima";
const age1="20";

const person={
    name:name1,  / name1,
    age:age1,     / age1,
    isMarried:false;
};

//another example
//person2 is exactly same but the name is Preeti
//Pratima name will be replaced with Preeti
const Person2 ={...person, name:"Preeti"}  //spread operator is used to copy all the elements from one array to another

const person={
    name:"Pratima",
    age:20,
    isMArried:false,
}

//When working with array
const names=["ram","Sam","Hari"];
const names2=[...names, "Sita"];
console.log("names2") //adds Sita to the names.

//map()
//adding the number 1 to the end of 
let names=["ram","hari","sita"];
names.map((map)=>{
    return name+"1";
})


//printing the names of the array
let names=["ram","hari","sita"];
names.map((name)=>{
    return<h1>{name}</h1>
})

//fileter()
//filtering name other than ram
let names=["ram","hari","sita"];
names.filter((name)=>{
    return name!=="ram";
})










