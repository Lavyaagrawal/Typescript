//now we are going to decalare the return typ of function
//before we had anntated paprameters of function 
//but that only is not enough becuase that will not acuse any error 
//whemn qwe return string to 
//so for this we also annotate function so that return type will be same as parameters
function addTwo(num) {
    return num + 2;
}
function getUpper(val) {
    return val.toUpperCase();
}
function signUpUser(name, email, isPaid) {
}
let loginUser = (name, email, isPaid = false) => { };
//its the case where we want multiple types
//which we will going to earn later how this can be handled
// function getValue(myVal: number){
//     if(myVal>5){
//         return true;
//     }
//     return "200"
// }
const getHello = (s) => {
    return " ";
};
const heros = ['thor', 'spiderman', 'ironman'];
//const heros =[1,2,3]
heros.map((hero) => {
    return `hero is ${hero}`;
});
function consoleError(errmsg) {
    console.log(errmsg);
}
//never type 
function handleError(errmsg) {
    throw new Error(errmsg);
}
addTwo(5);
getUpper("lavya");
signUpUser("lavya", "lavyaagarawal123@gmail.com", false);
loginUser("lavya", "lavyaagrawal123@gmail.com");
export {};
