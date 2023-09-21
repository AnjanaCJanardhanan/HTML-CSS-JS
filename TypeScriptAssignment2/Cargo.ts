class Cargo implements Payload
{
    constructor(public massKg: number,
        public material: string){
           this.massKg=massKg;
           this.material=material;
    }
}
export{Cargo}