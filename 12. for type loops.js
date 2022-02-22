const fruitArray = ["apple", "orange", "banana"]

//this lists indexes
for (let item in fruitArray){
    console.log(item)
}

//pythons for i in fruitarray
for (let item of fruitArray){ 
    console.log(item)
}

console.log("========================")

const fruitsObj = {
    apple: 13,
    orange: 17,
    banana:15,
};

for (let fruit in fruitsObj){
    console.log(fruit)
}

console.log("=================================")
//pythons for key in dic 
for (let fruit in fruitsObj){
    console.log(fruitsObj[fruit])
}