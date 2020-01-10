class Pet {
  constructor(type, name) {
    this.type = type;
    this.name = name;
  }

  info() {
    return `a ${this.type} named ${this.name}`
  }
}

class Owner {
  constructor(name) {
    this.name = name;
    this.pets = [];
  }

  numberOfPets() {
    return this.pets.length;
  }
}

class Shelter {
  constructor() {
    this.Owners = {};
  }

  adopt(owner, pet) {
    owner.pets.push(pet);
    if (owner.name in this.Owners) {
      this.Owners[owner.name].push(pet);
    } else {
      this.Owners[owner.name] = [pet];
    }
  }

  printAdoptions() {
    for (let ownerName in this.Owners) {
      console.log(`${ownerName} has adopted the following pets:`)
      this.Owners[ownerName].forEach(pet => console.log(pet.info()));
      console.log();
    }
  }
}

let butterscotch = new Pet('cat', 'Butterscotch');
let pudding      = new Pet('cat', 'Pudding');
let darwin       = new Pet('bearded dragon', 'Darwin');
let kennedy      = new Pet('dog', 'Kennedy');
let sweetie      = new Pet('parakeet', 'Sweetie Pie');
let molly        = new Pet('dog', 'Molly');
let chester      = new Pet('fish', 'Chester');

let phanson = new Owner('P Hanson');
let bholmes = new Owner('B Holmes');

let shelter = new Shelter();
shelter.adopt(phanson, butterscotch);
shelter.adopt(phanson, pudding);
shelter.adopt(phanson, darwin);
shelter.adopt(bholmes, kennedy);
shelter.adopt(bholmes, sweetie);
shelter.adopt(bholmes, molly);
shelter.adopt(bholmes, chester);
shelter.printAdoptions();
console.log(`${phanson.name} has ${phanson.numberOfPets()} adopted pets.`);
console.log(`${bholmes.name} has ${bholmes.numberOfPets()} adopted pets.`);

// P Hanson has adopted the following pets:
// a cat named Butterscotch
// a cat named Pudding
// a bearded dragon named Darwin

// B Holmes has adopted the following pets:
// a dog named Molly
// a parakeet named Sweetie Pie
// a dog named Kennedy
// a fish named Chester

// P Hanson has 3 adopted pets.
// B Holmes has 4 adopted pets.