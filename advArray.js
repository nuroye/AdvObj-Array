// Complete the below questions using this array:
const array = [
    {
        id:1,
      username: "john",
      team: "red",
      score: 5,
      items: ["ball", "book", "pen"]
    },
    {
        id:2,
      username: "becky",
      team: "blue",
      score: 10,
      items: ["tape", "backpack", "pen"]
    },
    {
        id:3,
      username: "susy",
      team: "red",
      score: 55,
      items: ["ball", "eraser", "pen"]
    },
    {
        id:4,
      username: "tyson",
      team: "green",
      score: 1,
      items: ["book", "pen"]
    },
  
  ];
  
  //Create an array using forEach that has all the usernames with a "!" to each of the usernames
    const secArray=[];
  const addarray = array.forEach((obj)=>{
        secArray.push(obj.username + "!")
    });
    console.log('ForEach', secArray);
  

  
  //Create an array using map that has all the usernames with a "? to each of the usernames
  const doArray=[];
  const mapArray = array.map((name)=>{
      if(name.id >= 1)
   doArray.push(name.username + "!")
   return (name);
  });
    console.log('map', doArray);
  
  //Filter the array to only include users who are on team: red
  const filteredArray = array.filter( (color)=> {
    return color.team === "red";
  });
  console.log (filteredArray);
    
  
  //Find out the total score of all users using reduce
  
  let sum = array.reduce((accumulator, num)=>{
      return accumulator + num.score;
  }, 0)
    console.log(sum);
  
  // (1), what is the value of i?
  // (2), Make this map function pure:
  const arrayNum = [1, 2, 4, 5, 8, 9];
  const newArray = arrayNum.map((num, i) =>{
          return num * 2
});
  // The value of "i" is "0,1,2,3,4,5"
   
  //BONUS: create a new list with all user information, but add "!" to the end of each items they own.

  //Evaluate these:
//#1
[2] === [2] // false
{} === {}  // false

//#2 what is the value of property a for each object.
const object1 = { a: 5 };  //a=5
const object2 = object1;  //a=5
const object3 = object2;  //a=5
const object4 = { a: 5};  //a=5
object1.a = 4; //a=4


//#3 create two classes: an Animal class and a Mamal class. 
// create a cow that accepts a name, type and color and has a sound method that moo's her name, type and color. 

class Animal {
      constructor(name, type, color,){
        console.log('Animal', this);
        this.name = Malami;
        this.type = Aberdeen-Angus;
        color = Black
        
      }
      sound(){
        console.log(`Moo, call me ${this.name}, a  ${this.type}, I'm ${this.color} in color `)
      }
      
}

class Mammal extends Animal {
  constructor(name, type, color){
    console.log('Mammal,type');
    super(name, type, color)
    console.log('Mammal', this);
  }
    same(){
        console.log(`Cool I'm also a ${this.type}`);
  }
}

// const Mammal= new Mammal('Buhari', 'Hereford', 'Brown');
// const Mammal= new Mammal('Lai', 'Galloway', 'White');