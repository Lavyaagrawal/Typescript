//union types allow to define a variable in two dfferent data types
let score: number | string = 33;
score = "55";

type user = {
  name: string;
  id: number;
};

type admin = {
  userName: string;
  id: number;
};

let hitesh: user | admin = { name: "hitesh", id: 334 };
hitesh = { userName: "lavya", id: 334 };

// function getDbId(id:number|string){
//     //making some api calls
//     console.log(`db id is:&{id}`);
// }
// getDbId(30);
// getDbId("45");

// function getDbId(id: number | string) {
//   id.toLowerCase()//its not allowing because string have function tolowercase
//   //but number dont so the type with string and n.o
//   //cant have
// }
//union narrowing
function getDbId(id: number | string) {
  if(typeof id=="string"){
    id.toLowerCase()
  }
}

//array
const data:number[]=[1,2,3]
const data2: string[] = ["1",'2','3'];
const data3:(string|number)[]=['1',2,'3',4,5]


let pi:3.14=3.14;//in this we declaring that pi can only have value 3.14

let seatAllotment:"aisle"|"middle"|"window";

seatAllotment="aisle"
seatAllotment="crew"
