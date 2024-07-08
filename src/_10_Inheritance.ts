class Animal {
  name: string;
  legs: string;
  age: number;
  type: string = "Lay Eggs";
  constructor(name: string, legs: string, age: number) {
    this.name = name;
    this.legs = legs;
    this.age = age;
  }

  sound(): string {
    return "Roar!! Roar!! Roar!!";
  }
}

// Dog Class
class Dog extends Animal {
    type: string = "mammal" // Overwrite the property defined inside the animat
  constructor(name: string, legs: string, age: number) {
    // Super methods is used to inherit all the properties and methods defined inside the parent to the child class
    super(name, legs, age);
  }

  sound(): string {
    return "Woof! Woof!";
  }
}

const myDog = new Dog("Bumpy", "4", 2);
myDog.age;
myDog.sound();
myDog.type;

//  Implements is Used for interface implementation
//  It enables a class to provide specific implementation for method defined in an interface
class Cat implements Animal {
  name: string;
  age: number;
  legs: string;
  type: string = "mammal";
  constructor(name: string, legs: string, age: number) {
    this.name = name;
    this.legs = legs;
    this.age = age;
  }
  sound(): string {
    return "Meoww ! Meow!";
  }
}

const myCat = new Cat("Cat", "4", 4);
myCat.sound();

// Check Instance
console.log(Dog instanceof Animal); // FALSE :-- It extends Animal not the instance of Animal
console.log(Cat instanceof Animal); // FALSE :-- It implements Animal (Matching the shape of Animal Class)
console.log(myDog instanceof Dog); // TRUE:-- myDog is an instance of Dog

