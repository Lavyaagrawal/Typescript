const User ={
    name: "hitesh",
    email:"lavyaagrawal123@gmail.com",
    isActive:true
}
 function createUser(
  { name, isPaid }: { name: string; isPaid: boolean }
): void {}
createUser({name: " lavya",isPaid: false})

function createCourse(): { name: string; isPaid: boolean } {
  return {name:"react",isPaid:true};
}
export{}