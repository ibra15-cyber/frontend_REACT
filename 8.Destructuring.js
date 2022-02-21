var person = {
    firstName: "Alan",
    lastName: "Smith",
    age: 50,
    eyeColor: "Blue"
};

console.log(person.firstName) //we could have used this
//we are destructuring obj or dict or map person
const {firstName, age} = person
console.log(firstName)
console.log(age)

console.log("======================");

[a,b]=[1,2]
console.log("a is",a)

//not working for now
// [a,b, ...remain]=[1,2,3,4,5,6,7,8,9,10] 
// console.log(remain)

// [,,c]=[1,2,3]
// console.log(c)