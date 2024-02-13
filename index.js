  // function generateQuote(){
    //   const arrayofquotes = ["lun pay chard umer", "hambani meray lorday pay", "wo bhi sonay ka hay", "girain mujhay"];
    //   let randomIndex = Math.round(Math.random() * arrayofquotes.length-1);
    //   document.getElementById("paragraph").innerText = arrayofquotes[randomIndex];
    // }

// let secondElapsed =0;
// let interval =null;
    

// function startclock(){

// }

// function stopclock(){
  
// }

// function resetclock(){
  
// }
// const array=(word)=>word.slice(word.lastIndexOf('.'))
// console.log(array('index.3'))


// const array=[1,2,3,4,5]
// let newarray= array.map(i=>i)
// console.log(newarray);

// let array=(newarray)=>{

// return newarray.map(i=>i*3)
// }
// console.log(array([1,2,3,4,5,6,6]))

// let array = [1, 2, 3, 4, 5];

// let result = array
//     .map(x => x * 2) // Doubles each element
//     .map(x => x.toString()) // Converts each element to a string
//     .map(x => x.split('').reverse().join('')); // Reverses each string

// console.log(result); // Output: [ '2', '4', '6', '8', '10' ] reversed

// let array = [
//   { name: 'John', age: 25 },
//   { name: 'Alice', age: 30 },
//   { name: 'Bob', age: 35 }
// ];

// let result = array
//   .map(person => ({ name: person.name.toUpperCase(), age: person.age * 2 }));

// console.log(result);
// Output: [ { name: 'JOHN', age: 50 }, { name: 'ALICE', age: 60 }, { name: 'BOB', age: 70 } ]


// const array=[{name:"ali",age:21},
//              {name:"abdullah",age:23},
//              {name:"shah",age:24},
//              {name:"rizvi",age:25} ];

//  array=[1,2,3,4,5,6,7]
//  let newarray=array.map(i=>({name:i.name.split('').reverse().join(''),age:i.age*2}))
//  console.log(newarray)

// const array=[1,2,3,4,5,6,7,]
// let newc=array.map(i=>array.join())
// console.log(newc)

// console.log([1,2,3,4,5,6].map( i =>i % 2 == 0 ))

// const sentance=["here is another one going to follow us bro"]
// const newsentence=sentance.split('').filter(i=>'aeiou'.includes(i.toLowerCase()));
// console.log(newsentence)


// const sentence = "here is another one going to follow us bro";
// const vowels = sentence.split('').filter(char => 'aeiou'.includes(char.toLowerCase()));
// console.log(vowels);

// function squareAndConvertToString(arr) {

//   return arr.map(num => (num * num).toString());
// }
// const input = [1, 2, 3, 4, 5];
// const output = squareAndConvertToString(input);
// console.log(output); // Output: ["1", "4", "9", "16", "25"]


// const array=[1,2,3,4,5,6,7]
// newarray=array.filter(i=>i>3).map(i=>i*i)
// console.log(newarray)

// array=["ay yo whats up"]
// newarray=array.split('').filter(i=>!"aeiou".includes(char)).join(''));
// console.log(newarray)

// const array = ["ay yo whats up"];
// let arraynew=array.map(string=>string.split('').filter(i=> !"aeiouAIOU".includes(char)).join(''));
// console.log(arraynew);

let btn = document.querySelector('.btn'); // Assuming you're selecting by class name
function colorChanges() {
  btn.style.color = "red";
  btn.style.backgroundColor = "blue"; // Change background color to blue
}
btn.addEventListener("click", colorChanges);
