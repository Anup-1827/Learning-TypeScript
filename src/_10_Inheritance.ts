class Animal{
    name:string;
    legs:string;
    age:number
    constructor(name:string, legs:string, age: number){
        this.name = name;
        this.legs = legs;
        this.age = age;
    }
}


// Dog Class
class Dog extends  Animal{

    woof():string{
        return "Woof! Woof!"
    }
}

const myDog = new Dog("Bumpy", "4", 2)
myDog.age
myDog.woof()

// Cat Class
class Cat extends Animal{
    meow():string{
        return "Meoww ! Meow!"
    }
}

const myCat = new Cat("Cat", "4", 4)
myCat.meow()