// console.log(10 * 50);
// console.log ("Chris".charAt(4));

//Booleans
// var shouldBeTrue = false;
// if (shouldBeTrue === true){
//     console.log("This var is true!");
// }
// else {
//     console.log("This var is not true")
// };

//The following evaluates to true
// var hasContent = "jjdjdxn"
// console.log(Boolean(hasContent));
// var myArray = [];

// //the following evaluates to false
// var doesnotHaveContent = "";
// var isZero =0 ;
// var nonAssignedVariable;
// var isfalse = false;
// var isNotANumber = NaN;

// console.log(null ===undefined);

//Objects
//Collections of name-value pairs
// var myObject = new Object();
// myObject['1'] = "Chris";
// myObject['2'] = "Kibi";
// myObject['3'] = "Cedy";

// var myOtherObject = {
//     1: "Chris",
//     2: "Sally",
//     3: "Bob",
//     4: "Billy",
//     5: "Jane",

// };
// myOtherObject['6'] = "Ashley";

// var anotherObject ={
//     firstName : "Collins",
//     lastName : "Kibiwott",
//     age :23,
//     numbers: {
//         mobile:"0713287888",
//         home: "0743457890",
//     },
//     address: "123 Nairobi",
// }

// //console.log(anotherObject.numbers.home);

// var donut = {
//     type:"coconut",
//     glazed :true,
//     sweetness:8,
//     hasChocolate :false,
//     sayType:function(){
//         console.log("Type:" + this.type);
//     },
//     showSweetness: function(){
//         console.log("Sweetness:" +this.sweetness + "/10");
// }

// };
// // donut.showSweetness();
// // donut.sayType();


// //Constructor pattern for creating objects
// function Donut(type, glazed, sweetness, hasChocolate){
//     this.type = type;
//     this.glazed = glazed;
//     this.sweetness= sweetness;
//     this.hasChocolate = hasChocolate;
//     this.sayType= function(){
//         console.log("Type:" + this.type);
//     }
//     this.showSweetness= function(){
//         console.log("Sweetness:" + this.sweetness + "/10");
//     };
// }
// var coconutDonut = new Donut("Coconut",false ,8, true);
// var vanillaDonut = new Donut("Vanilla", true ,10,false);
// coconutDonut.tasteGood=true;


// //Arrays
// //Collection of data

// var myNamesArray= ["Kibenon","Chris","Jessica","John"];
// // myNamesArray.push("Lesley");
// // var myOtherNames =["Jake","Sheldon", "Adam"];
// // var concattedArray = myNamesArray.concat(myOtherNames) 

// // var sortedArray =concattedArray.sort();
// //var joinedArray = myNamesArray.join(",")

// // var slicedArray = concattedArray.slice(5,7);

// // var myDonuts = [coconutDonut, vanillaDonut];
// // var donutLength = myDonuts.length;
// // var lastDonut = myDonuts[donutLength-1];

// // lastDonut.sayType();
// // lastDonut.showSweetness();

// var slicedArray = myNamesArray.slice(myNamesArray.length-1);
//console.log(slicedArray);


//Variables and Constant

// var myName = "Chris";
// function sayHi(){
//     console.log("Hi" + " " +myName)
// }
// sayHi()
//  var count = 1;
//  function increase(){
//     count+= 1;
//     console.log(count)


//  }
//  increase();

                 // LET AND CONST
// function sayHi(){
// let shouldSayHi = false;
// let myName;

// if (shouldSayHi===true){
//     let myName = "Chris";
//     console.log("Hi"+" "+ myName);
// }else{
//     let myName = "Lesley";
//     console.log("Hi"+" "+ myName);

// }

// }
// sayHi();



// const MYNAME = "Chris";
// console.log(MYNAME);

// // const cannot be assigned a new variable since its Constant.

// const myObjects = {
//     name:"Chris",
//     age:30
// }
// console.log(myObjects);
// myObjects.name= "Bob";
// myObjects.age = 25;
// console.log(myObjects);


// function sayHi(){
//     if(true){
//         const myName ="Jim";
//         console.log(myName);;
//     }
// }
// sayHi();



// IF STATEMENT
//If (expression) {statement} to be executed if expression evaluates truthy or falsey statement

// 














    
//   Functions
// function personFormatter(firstName, lastName, age){
//     function formatNames(arg1,arg2){
//         return arg1 + " " +arg2;
//     }

// function dataFormmater(fullName, num){
//     const formatteddata = {
//         name:fullName,
//         age:num
//     }
//     return formatteddata;
// }
// const formattedName = formatNames(firstName, lastName);
//     return dataFormmater(formattedName,age);
// }
// console.log(personFormatter("Chris", "Jones",20)) 


// const multipier = (num1,num2) => {
//     return num1 * num2 ;
// }
// console.log(multipier(5,10))

const users = [
    { name: "Chris",age:60},
    {name:"Jane",age:30},
    {name: "Billy",age:45}
];

const mapUserNames = (myArr) =>
     myArr.map((user) => user.age );
  
    console.log(mapUserNames(users));


    const numbers = [1,2,3,8,4,5];

    const filteredNumbers = numbers.filter((num)=>num % 2 !==0);

    const doubledNumbers = (num) => {
        const numberContainer = [];
        num.forEach((n)=> {
            const doubled = n*2;
            numberContainer.push(doubled)
        });
        return numberContainer;
    }
    console.log(doubledNumbers(numbers));