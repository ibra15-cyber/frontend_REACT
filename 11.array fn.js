var numbers=[1,2,3]

const plus3 = numbers.map(item=>item+3)

console.log(plus3)

//filter 3
const filt= numbers.filter(item=>item in numbers) //indexes in array
console.log(filt)

const filt2= numbers.filter(item=>item==3) //filter 3
console.log(filt2)

//another variable 
const number = num=>num+4
const plus4fn = numbers.map(number)
console.log(plus4fn)