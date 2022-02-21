function fruitColor(fruit){
    switch(fruit){
        case "apple":
            var color ="red"  
            return color;

        case 'banana':
            var color="yellow"
            return color;

        default:
            return "other colors"
    }
}

console.log(fruitColor("apple"))
console.log(fruitColor("banana"))
console.log(fruitColor(""))


console.log("=====================")
function fruitColor1(fruit){
    switch(fruit){
        case "apple": {
            let color ="red"  
            return color;
        }
            

        case 'banana': {
            let color="yellow"
            return color;
        }
            

        default:
            return "other colors"
    }
}
// when using let make sure it's in a block
console.log(fruitColor1("apple"))
console.log(fruitColor1("banana"))
console.log(fruitColor1(""))

