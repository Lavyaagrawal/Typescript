
//type aliases
//A type alias lets you define a type once and reuse it everywhere.

type User={
  name: string;
  email: string;
  isActive:boolean;

}

function createUser(user:User):User{
  return { name: "", email: "", isActive: true };

}
createUser({name:"",email:"",isActive:true})
export{}