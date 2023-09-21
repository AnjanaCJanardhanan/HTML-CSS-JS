class Astronaut implements Payload
{
    constructor(public massKg: number,
        public name: string){
           this.massKg=massKg;
           this.name=name;
    }

}
export{Astronaut}