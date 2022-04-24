//vargables!

let pats = 0
let patsPerSecond = 0
let arms = 1

//"inventory"
let roundBoys = 0
let longBoys = 0
let govnahs = 0

// item shop vargables
let roundBoyCost = 25
let longBoyCost = 450
let govnahCost = 200
let fineCost = 9001

//FUNCTIONS?!?!?
//main game counters and HTML selection
const lab = document.getElementById('lab')
const patsNumber = document.getElementById('patsNumber')
const pps = document.getElementById('patsPerSecond')
const patsPerClick = document.getElementById('patsPerClick')

lab.addEventListener('click', function() {
    pats += arms;
    patsNumber.innerText = pats
    // console.log(pats)
})

// pats per second timer
setInterval(function() {
    
        pats += patsPerSecond;

        patsNumber.innerText = pats
}, 1000)

// round boys
const roundBoyTotal = document.getElementById('roundBoyTotal')
const roundBoyCostAmt = document.getElementById('roundBoyCost')

const roundBoyBuyBtn = document.getElementById('roundBoyBuyBtn').addEventListener('click', function() {
    if (pats >= roundBoyCost) {
        roundBoys++
        patsPerSecond++
        roundBoyCost = Math.floor(roundBoyCost * 1.7)
        roundBoyCostAmt.innerText = roundBoyCost
        roundBoyTotal.innerText = roundBoys
        pps.innerText = patsPerSecond

    } else {
        alert('You do not have enough pats!')
    }
})

// long boys
const longBoyTotal = document.getElementById('longBoyTotal')
const longBoyCostAmt = document.getElementById('longBoyCost')

const longBoyBuyBtn = document.getElementById('longBoyBuyBtn').addEventListener('click', function() {
    if (pats >= longBoyCost) {
        longBoys++
        patsPerSecond = patsPerSecond + 5
        longBoyCost = Math.floor(longBoyCost * 2.2)
        longBoyCostAmt.innerText = longBoyCost
        longBoyTotal.innerText = longBoys
        pps.innerText = patsPerSecond

    } else {
        alert('You do not have enough pats!')
    }
})

//Govnahs!
const govnahTotal = document.getElementById('govnahTotal')
const govnahCostAmt = document.getElementById('govnahCost')

const govnahBuyBtn = document.getElementById('govnahBuyBtn').addEventListener('click', function() {
    if (pats >= govnahCost) {
        govnahs++
        arms++
        govnahCost = Math.floor(govnahCost * 1.5)
        govnahCostAmt.innerText = govnahCost
        govnahTotal.innerText = govnahs
        patsPerClick.innerText = arms
    } else {
        alert('You do not have enough pats!')
    }
})


const fineCostAmt = document.getElementById('fineCost')

const fineBuyBtn = document.getElementById('fineBuyBtn').addEventListener('click', function() {
    if (pats >= fineCost) {
    
        patsPerSecond = patsPerSecond + 100
        fineCostAmt.innerText = `Already Adopted!`
        pps.innerText = patsPerSecond
        fineBuyBtn.removeEventListener('click')

    } else {
        alert('You do not have enough pats!')
    }
})
