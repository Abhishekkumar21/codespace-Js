                    
                    //OBJECT in JavaScript -- A unordered collection of key-value pairs. Each key-value pair is the "Property" of the object.

const prompt = require('prompt-sync')();  // first install package - npm install prompt-sync

// Creating object - Method (I): Literal object creation
/*
const abhishek = {                                   // variable abhishek is an Object have 6 properties.
    firstName:"Abhishek",                           // property-name(key) firstName has Value "Abhishek" assigned to it.
    lastName: "Kumar",                             
    birthYear: 2000,                                        
    job : "Software Engineer",                             
    friends: ['Rajneesh', 'Saurabh', 'Allwyn','Vishal'],  
    112 : "Emergency "  ,                     // property-name 112 has value "Emergency". [[[[NOTE--> Keys can be indetifiers or string]]]]
    "love bird" : true                // * Multiword property name must be quoted.
};                
*/
// Accessing properties of an object - dot and [] operator
// dot operator- >> object.key
            // console.log(abhishek.firstName);
            // console.log(abhishek.lastName);
            // console.log(abhishek.friends);

// [] operatoe - >> object[computed propert name /  actual property name]
/*
            console.log(abhishek['firstName']);         //---
            console.log(abhishek["lastName"]);         //   |  propery names are in "" beacuse they are of string type.
            console.log(abhishek["job"]);             //    | 
            console.log(abhishek["friends"]);        // ----
            console.log(abhishek[112]);     
            console.log(abhishek["love bird"]);      // Multiword property can be accessed only by [] operator.
*/

// const prop = 'Name';
// console.log(abhishek['first'+ prop]);


/*
//Challenge
while(true){
    const interestedIn = prompt("Choose any of these options- firstName, lastName, birthYear, job & friends: ");
     if(interestedIn == 'firstName' ||
        interestedIn == 'lastName'  ||
        interestedIn == 'birthYear' ||
        interestedIn == 'job'       ||
        interestedIn == 'friends'   && 
        typeof interestedIn == 'string')
        {
            console.log(abhishek[interestedIn]); 
            break;
        }
     else
        console.log("Wrong choice! Please choose among firstName, lastName, birthYear, job & friends");
}
*/


/**---------------------------------------Object Method & 'this' keyword ----------------------------------------------------------------------------*/
//A function attached to the object is known as Object Method. 
// 'this' keyword point to the current object.

const jonas = {
    "love bird" : true,
    friends : ['Adam', 'john'],
    birthYear : 1999,
    calcAge : function (){               // no need to give parameter to function()
        this.age = 2023 - this.birthYear;    // new property added to object jonas.
        return this.age;
    }
};
//jonas.calcAge();   
jonas['calcAge']();       // calling calcage() method
console.log(jonas.age); 
/* accessing  newly added property(using this keyword) to object jonas. 
if you try to access age property (declared insode calcAge method) without calling the calcAge() method,
 it will give 'undefined' value.
*/








