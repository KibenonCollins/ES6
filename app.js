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
var myObject = new Object();
myObject['1'] = "Chris";
myObject['2'] = "Kibi";
myObject['3'] = "Cedy";

var myOtherObject = {
    1: "Chris",
    2: "Sally",
    3: "Bob",
    4: "Billy",
    5: "Jane",

};
myOtherObject['6'] = "Ashley";

var anotherObject ={
    firstName : "Collins",
    lastName : "Kibiwott",
    age :23,
    numbers: {
        mobile:"0713287888",
        home: "0743457890",
    },
    address: "123 Nairobi",
}

//console.log(anotherObject.numbers.home);

var donut = {
    type:"coconut",
    glazed :true,
    sweetness:8,
    hasChocolate :false,
    sayType:function(){
        console.log("Type:" + this.type);
    },
    showSweetness: function(){
        console.log("Sweetness:" +this.sweetness + "/10");
}

}
donut.showSweetness();
