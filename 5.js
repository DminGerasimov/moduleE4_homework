class ElecroDevice{
    constructor(name){
        this.name = name;
        this.state = false //device turn off default
    }
    turnOn = () =>{
        if (!this.state){
            console.log(`${this.name} turn on.`);
            this.state = true;
        }
        else {
            console.log(`${this.name} is always turn on.`);
        }
    }

    turnOff = () =>{
        if (this.state){
            console.log(`${this.name} turn off.`);
            this.state = false;
        }
        else {
            console.log(`${this.name} is always turn off.`);
        }
    }
}

class Lamp extends ElecroDevice{
    constructor(name){
        super(name);
    this.purpose = "lighting"; //добавляем свойство "предназначение"
    }

    getPurpose = () =>{
        console.log(`${this.name} is for ${this.purpose}.`);
    }

    getPower = (amperage) =>{
        console.log(`The power of ${this.name} is ${220*amperage/1000} KWatts.`)
    }
}


class Computer extends ElecroDevice{
    constructor(name){
        super(name);
    this.purpose = "computing"; //добавляем свойство "предназначение"
    }

    getPurpose = () =>{
        console.log(`${this.name} is for ${this.purpose}.`);
    }

    getPower = (amperage) =>{
        console.log(`The power of ${this.name} is ${220*amperage/1000} KWatts.`)
    }
}


const lamp1 = new Lamp('Desktop lamp #1');
const lamp2 = new Lamp('Desktop lamp #2');
lamp1.turnOn();
lamp1.turnOn();

lamp1.getPower(1);
lamp1.getPurpose();
lamp2.turnOff();
lamp2.turnOn();
lamp2.getPower(2);

const comp1 = new Computer('Desktop');
const comp2 = new Computer('Notebook');
comp1.turnOn();
comp2.turnOn();
comp1.getPower(3);
comp2.getPower(2.5);
comp1.getPurpose();
comp1.turnOff();
comp2.turnOn();
