//these is the way to write function in typsecript
//in variable ts can infer its type automaticaaly
//but in case of function if we dont define paarmeters to function 
//it will take it as any type which is wrong
function addTwo(num: number){
    return num+2
}


function getUpper(val: string){
    return val.toUpperCase()
}
function signUpUser(name:string,email:string,isPaid: boolean){


}
let loginUser=(name:string,email:string,isPaid:boolean=false)=>{}

addTwo(5)
getUpper("lavya")
signUpUser("lavya","lavyaagarawal123@gmail.com",false)
loginUser("lavya","lavyaagrawal123@gmail.com")
export{}