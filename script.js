class Animal {ln
  constructor(food, location, makeNoise) {
    this.food = food;
    this.location = location;
    this.makeNoise = makeNoise;
  }
}

class Dog extends Animal {
  constructor(food, location, makeNoise) {
    super(food, location, makeNoise);
  }
}

class Cat extends Animal {
  constructor(food, location, makeNoise) {
    super(food, location, makeNoise);
  }
}

class Horse extends Animal {
  constructor(food, location, makeNoise) {
    super(food, location, makeNoise);
  }
}

class Veterinarian {
  treatAnimal(animal) {
    document.writeln(`Ветеринар лечит ${animal.constructor.name},<br> ${animal.constructor.name} ест ${animal.food},<br> ${animal.constructor.name} живет в ${animal.location}, <br> ${animal.constructor.name} говорит ${animal.makeNoise}<br><br>`);
  }
}


var eatDog = prompt("Что ест собака");
var locationDog = prompt("Где живет собака");
var makeNoiseDog = prompt("Что говорит собака");

var eatHorse = prompt("Что ест лошадь");
var locationHorse = prompt("Где живет лошадь");
var makeNoiseHorse = prompt("Что говорит лошадь");

var eatCat = prompt("Что ест кот");
var locationCat = prompt("Где живет кот");
var makeNoiseCat = prompt("Что говорит кот")
const dog = new Dog(eatDog, locationDog, makeNoiseDog);
const cat = new Cat(eatCat, locationCat, makeNoiseCat);
const horse = new Horse(eatHorse, locationHorse, makeNoiseHorse);
const veterinarian = new Veterinarian();


veterinarian.treatAnimal(dog);
veterinarian.treatAnimal(cat);
veterinarian.treatAnimal(horse);