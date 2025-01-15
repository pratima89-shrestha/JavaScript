


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
