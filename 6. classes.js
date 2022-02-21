//parent class
class Animal{
    eat= () => console.log("i am eating")
}

//inheritance
class Dog extends Animal{
    //attributes fileds propeties
    weight=20;
    age=8;
    bark=()=>console.log("bark, bark bar")
}

puppy= new Dog() //obj
console.log(puppy.bark())
console.log(puppy.eat())