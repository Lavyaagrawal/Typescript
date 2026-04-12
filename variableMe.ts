//typscript syntax for declaring variable
//let variable name: datatype=value
let greetings: string = "Hello lavya";
console.log(greetings)


//number
let userId: number = 334466;

//boolean
let isLoggedIn: boolean=false;
//🧠 What is Type Inference?
// 👉 Type inference means:
// TypeScript automatically figures out the type of a variable without you explicitly writing it.



// //any function
// any means:
// “This variable can hold any type of value, and TypeScript won’t complain.”

let hero;

function getHero(){
    return true;
}

hero=getHero()
export {}