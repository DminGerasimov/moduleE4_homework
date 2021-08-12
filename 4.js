function ElecroDevice(){
    this.turnOn = (name) =>{
            console.log(`${name} turn on.`);            
    }

    this.turnOff = (name) =>{
            console.log(`${name} turn off.`);
    }
}

function Lamp(name){
    this.name = name;
    this.purpose = "lighting"; //добавляем свойство "предназначение"
    this.getPurpose = () =>{
        console.log(`${Lamp.name} is for ${this.purpose}.`);
    }

    this.getPower = (amperage) =>{
        console.log(`The power of ${this.name} is ${220*amperage/1000} KWatts.`)
    }
}
Lamp.prototype = new ElecroDevice();


function Computer(name){
    this.name = name;
    this.purpose = "computing"; //добавляем свойство "предназначение"
    this.getPurpose = () =>{
        console.log(`${this.name} is for ${this.purpose}.`);
    }

    this.getPower = (amperage) =>{
        console.log(`The power of ${this.name} is ${220*amperage/1000} KWatts.`)
    }
}
Computer.prototype = new ElecroDevice();



const lamp1 = new Lamp('Desktop lamp #1');
const lamp2 = new Lamp('Desktop lamp #2');
lamp1.turnOn(lamp1.name);
lamp1.getPower(1);
lamp1.getPurpose();
lamp2.turnOff(lamp2.name);
lamp2.getPower(2);

const comp1 = new Computer('Desktop');
const comp2 = new Computer('Notebook');
comp1.turnOn(comp1.name);
comp2.turnOn(comp2.name);
comp1.getPower(3);
comp2.getPower(2.5);
comp1.getPurpose();
comp1.turnOff(comp1.name);

