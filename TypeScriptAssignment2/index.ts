import { Astronaut } from "./Astronaut.js";
import { Cargo } from "./Cargo.js";
import { Rocket } from "./Rocket.js";
const astronaut1 = new Astronaut(75, "John");
const astronaut2 = new Astronaut(80, "Jane");
const cargo1 = new Cargo(500, "Food");
const cargo2 = new Cargo(300, "Equipment");

const rocket = new Rocket("Saturn V", 2000);
console.log("Rocket name:", rocket.name);

rocket.addAstronaut(astronaut1);
rocket.addAstronaut(astronaut2);
rocket.addCargo(cargo1);
rocket.addCargo(cargo2);

console.log("Current rocket mass: " + rocket.currentMassKg() + " kg");
console.log("Can add another astronaut:", rocket.addAstronaut(new Astronaut(90, "Mike")));
console.log("Can add another cargo:", rocket.addCargo(new Cargo(600, "Fuel")));