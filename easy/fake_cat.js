class Cat {
  constructor(name) {
    this.name = name;
  }
  speaks() {
    return `${this.name} says meowwww.`;
  }
}

let fakeCat = Object.create(Cat.prototype)
fakeCat.name = 'paws';

console.log(fakeCat instanceof Cat); // logs true

fakeCat.speaks();