var name = 'Sam'
var namecopy = name //reference to only this name

console.log("name", name) //sam
console.log("namecopy", namecopy) //sam

name="Mary"
console.log("name", name) //expect merry
console.log("namecopy", namecopy) //remain the old name

console.log("============================================")

const user={
    name:"Mike",
}
const userCopyObj = user

console.log("userObj",user) //mike
console.log("userCopyObj", userCopyObj) //mike

// if you do not want copy to change use destructuring
const userCopyObj2 = {...user}

user.name="Mary"
console.log("userObj",user) //marry
console.log("userCopyObj", userCopyObj)  //marry  

console.log("userObj",user) //mike
console.log("userCopyObj", userCopyObj2) //refers to old user