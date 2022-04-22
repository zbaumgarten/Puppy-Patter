//vargables!

//main game counters
// let clickButton = document.getElementById('clickButton').addEventListener('click', patGoodBoy)

let pats = 0
let patsPerSecond = 0
let arms = 1

//"inventory"
let roundBoys = 0
let longBoys = 0
let gonvahs = 0

// item shop vargables
let roundBoyCost = 25
let longBoyCost = 100
let govnahCost = 250
let fineCost = 1001

//FUNCTIONS?!?!?

function patGoodBoy() {
    pats += arms;
    document.getElementById('patsNumber').innerText = pats;
    

}

console.log(pats)


