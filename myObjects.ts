type User={
  readonly _id:string;
  name: string;
  email:string;
  isActive:boolean;
  credcaerddetails?:number//so questionmark suggest that it is optional
}

let myUser:User={
  _id:"1234",
  name:"h",
  email:"lavya@gmail.com",
  isActive:false
}


type cardNumber={
  cardnumber: string;
}
type cardDate={
  carddate:string;
}
//so here we declared two types for card number and card date
//and merged them and also added on e more feautr which is cv
//used and keyword so trye when all condition fullfill
type cardDetails=cardNumber&cardDate &{
  cvv:number;
}



myUser.email="lucifer@gmail.com"
//we camot be able to chne id becuse its set as readonly
//myUser.id="123"
