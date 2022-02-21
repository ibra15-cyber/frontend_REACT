oldArr=[1,3, 5]
newArr=[...oldArr, 2,4]

console.log(oldArr)
console.log(newArr)

console.log("====================")

oldObj = {
    name: "peter",
    height: 175
}

newObj = {
    ...oldObj,
    weight: 50
}
console.log(newObj)

newObj2 = {
    ...oldObj,
    height: 24343, //this replaces height in the obj spread
    weight: 50
}
console.log(newObj2)

console.log("===========================")

const showValues = (...args) => {
    console.log(...args) //prints all anticipated arguments
    for(i=0; i<args.length; i++){
        console.log(args[i]) //prints one after the other
    }
}

showValues('apple', 'mango', 'banana')