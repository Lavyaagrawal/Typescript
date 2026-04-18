//now we are going to decalare the return typ of function
//before we had anntated paprameters of function 
//but that only is not enough becuase that will not acuse any error 
//whemn qwe return string to 
//so for this we also annotate function so that return type will be same as parameters

function addTwo(num: number): number{
    return num+2
}


function getUpper(val: string){
    return val.toUpperCase()
}
function signUpUser(name:string,email:string,isPaid: boolean){


}
let loginUser=(name:string,email:string,isPaid:boolean=false)=>{}

//its the case where we want multiple types
//which we will going to earn later how this can be handled
// function getValue(myVal: number){
//     if(myVal>5){
//         return true;
//     }
//     return "200"
// }
const getHello = (s: string): string => {
    return " "
};

const heros=['thor','spiderman','ironman']
//const heros =[1,2,3]
heros.map((hero):string=>{
    return `hero is ${hero}`
})

function consoleError(errmsg: string):void{
    console.log(errmsg);
}
//never type 
function handleError(errmsg: string): never{
  throw new Error(errmsg);
}
addTwo(5)
getUpper("lavya")
signUpUser("lavya","lavyaagarawal123@gmail.com",false)
loginUser("lavya","lavyaagrawal123@gmail.com")
export{}