///todo FIRST TASK
class Cars{
    constructor(options){
        this.element = document.querySelector(options.selector);
        this.model = options.model
        this.color = options.color
        this.wheels = options.wheels
        this.element.style.width = options.width+"px";
        this.element.style.height = options.height+"px";
        this.element.style.backgroundColor = options.color;
    }
    work(){
        console.log(`${this.model} заведена`)
    }
}
class Round extends Cars{
    constructor(options) {
        super(options);
        this.element.style.borderRadius = options.roundness+"px"
    }
}
class Bumper extends Round{
    constructor(options){
        super(options);
        this.element.style.border = options.colorBumper +" "+ options.widthBumper + "px " + options.type;
    }
}

const car1 = new Cars({
    selector: '#car1',
    model: "kia",
    wheels: 4,
    width: 200,
    height: 80,
    color: 'blue'
})
console.log(car1)
car1.work();
const car2 = new Round({
    selector: '#car2',
    model: "tesla",
    wheels: 3,
    width: 250,
    height: 80,
    color: 'darkred',
    roundness: 20,
})
console.log(car2)
car2.work();
const car3 = new Bumper({
    selector: '#car3',
    width: 400,
    height: 70,
    model: 'toyota',
    color: 'black',
    wheels: 6,
    roundness: 50,
    colorBumper: 'white',
    widthBumper: 10,
    type: 'solid'
})
console.log(car3)
car3.work();



//todo SECOND TASK

const light = prompt('Type down traffic color light')
console.log(light)
class Circle{
    constructor(options){
        this.element = document.querySelector(options.selector);
        this.element.style.width = options.width+"px"
        this.element.style.height = options.height+"px"
        this.element.style.borderRadius = options.roundness+"%"
        this.element.style.backgroundColor = 'grey'
    }
    set color(value){
        this.element.style.backgroundColor = value
    }
}
const circle1 = new Circle({
    selector: '#round1',
    width: 150,
    height: 150,
    roundness: 50,
})
const circle2 = new Circle({
    selector: '#round2',
    width: 150,
    height: 150,
    roundness: 50,
})
const circle3 = new Circle({
    selector: '#round3',
    width: 150,
    height: 150,
    roundness: 50,
})
switch(light.trim().toLocaleLowerCase()){
    case "red":
        circle1.color = 'red'
        break
    case "green":
        circle3.color = 'green'
        break
    case "yellow":
        circle2.color = 'yellow'
        break
    default:
        alert('type the correct color!')
        break
}