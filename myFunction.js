//these is the way to write function in typsecript
//in variable ts can infer its type automaticaaly
//but in case of function if we dont define paarmeters to function 
//it will take it as any type which is wrong
function addTwo(num) {
    return num + 2;
}
function getUpper(val) {
    return val.toUpperCase();
}
function signUpUser(name, email, isPaid) {
}
let loginUser = (name, email, isPaid = false) => { };
addTwo(5);
getUpper("lavya");
signUpUser("lavya", "lavyaagarawal123@gmail.com", false);
loginUser("lavya", "lavyaagrawal123@gmail.com");
export {};
