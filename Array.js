// Practice of array, using different ways of array
// 1. Array list
let fruit = ["Apple","Banana","Cherry"];
let sport = ["Fooball","Basketball","Tennis","Voleyball"]
let cars = ["M5",'720s','RAM','Gwagon','M4','F90']
let food = ['Pizza','Sushi','Pasta','Salad']
let pc = ['Mouse','Keyboard','Camera','Monitor','Desk','PC']
let animals = ['Dog','Cat','Mouse','Turtle','Hamster','Fish','Lion','Zebra','Shark']
let F1 = ['Mercedes','Redbull','Ferrari','Alpha Tauri']

// 2. "Array" Constructor
let math =  new Array("Sum",'Substraction','DIvision','Multiplication')
let bikes = new Array('Ducatti','Toyota','IDk')
let MoreCars = new Array('Black series','Pagani','Jesko','Lambo',)
let DJgear = new Array('DJ console','DJ Mixer','Headphones','Speakers')
let football = new Array('Tomas Muller','Messi','Cristiano','Kroos','Frenkie DeJong','Bernardo Silva')
let goats = new Array('Messi','Black Mamba','Hamilton','Cristiano','Cryuff')
let numbers = new Array(1,2,3,4,5,6,7,8,9,10)
// 3. Create a empty Array
let empty = []
let empty1 = new Array()

// 4. Showing Array Elements
console.log(fruit[0])
console.log(math[0])
console.log(empty)
for(let i = 0;i<fruit.length;i++){
    console.log(fruit[i]);
}
for(let i = 0;i<goats.length;i++){
    console.log(goats[i])
}
console.log(football[0]);
for(let i = 0;i<goats.length;i++){
    console.log(`Elementos ${i}: ${goats[i]}`);
}
// 5. Modyfing Array Elements
console.log(fruit)
fruit[1] = "Pineapple"
console.log(fruit);
console.log(MoreCars)
MoreCars[1]  = "Mcl Senna";
console.log(MoreCars)

// 6. Adding elements to an array
numbers.push(35);
console.log(numbers)
goats.push("Iniest")
console.log(goats)
goats.unshift("Limon")
console.log(goats)
goats.pop()
console.log(goats)
numbers.unshift(10)
console.log(numbers)
