import { Astronaut } from "./Astronaut.js";
import { Cargo } from "./Cargo.js";
import {Payload} from "./Payload.js"
class Rocket {
    cargoItems :Cargo[]=[];
    astronauts :Astronaut[]=[];

    constructor(public name: string,
        public totalCapacityKg: number,
         ){
            this.name=name;
            this.totalCapacityKg=totalCapacityKg;

    }
    sumMass(items: Payload[]): number {
        return items.reduce((acc, item) => acc + item.massKg, 0);
      }
    
      currentMassKg(): number {
        const cargoMass = this.sumMass(this.cargoItems);
        const astronautMass = this.sumMass(this.astronauts);
        return cargoMass + astronautMass;
      }
      canAdd(item: Payload): boolean {
        return this.currentMassKg() + item.massKg <= this.totalCapacityKg;
      }
    
      addCargo(cargo: Cargo): boolean {
        if (this.canAdd(cargo)) {
          this.cargoItems.push(cargo);
          return true;
        } else {
          return false;
        }
      }
      addAstronaut(astronaut: Astronaut): boolean {
        if (this.canAdd(astronaut)) {
          this.astronauts.push(astronaut);
          return true;
        } else {
          return false;
        }
      }
    }

export{Rocket};