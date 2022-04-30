//vargables!

let pats = 0
let patsPerSecond = 0
let arms = 1

//"inventory"
let roundBoys = 0
let longBoys = 0
let govnahs = 0
let mopGirls = 0
let lilSweeties = 0
let dBoys = 0

// item shop vargables
let roundBoyCost = 25
let longBoyCost = 2500
let govnahCost = 115
let fineCost = 9001
let mopGirlCost = 200
let lilSweetyCost = 1000
let dBoyCost = 1200
let fourCost = 100000000

//reset button

const resetBtn = document.getElementById('reset').addEventListener('click', function() {
    pats = 0
    patsPerSecond = 0
    arms = 1

    roundBoys = 0
    longBoys = 0
    govnahs = 0
    mopGirls = 0
    lilSweeties = 0
    dBoys = 0

    roundBoyCost = 25
    longBoyCost = 2500
    govnahCost = 115
    fineCost = 9001
    mopGirlCost = 200
    lilSweetyCost = 1000
    dBoyCost = 1200
    fourCost = 100000000
})

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
        pats -= roundBoyCost
        roundBoyCost = Math.floor(roundBoyCost * 1.2)
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
        patsPerSecond = patsPerSecond + 85
        pats -= longBoyCost
        longBoyCost = Math.floor(longBoyCost * 1.5)
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
        pats -= govnahCost
        govnahCost = Math.floor(govnahCost * 1.5)
        govnahCostAmt.innerText = govnahCost
        govnahTotal.innerText = govnahs
        patsPerClick.innerText = arms
    } else {
        alert('You do not have enough pats!')
    }
})

// consortium of the finely dressed
const fineCostAmt = document.getElementById('fineCost')

const fineBuyBtn = document.getElementById('fineBuyBtn').addEventListener('click', function() {
    if (pats >= fineCost) {
        pats -= fineCost
        patsPerSecond = patsPerSecond + 1000
        fineCostAmt.innerText = `Already Adopted!`
        pps.innerText = patsPerSecond
        fineBuyBtn.removeEventListener('click', this.function())

    } else {
        alert('You do not have enough pats!')
    }
})

//mop girls
const mopGirlTotal = document.getElementById('mopGirlTotal')
const mopGirlCostAmt = document.getElementById('mopGirlCost')

const mopGirlBuyBtn = document.getElementById('mopGirlBuyBtn').addEventListener('click', function() {
    if (pats >= mopGirlCost) {
        mopGirls++
        pats -= mopGirlCost
        patsPerSecond = patsPerSecond + 5
        mopGirlCost = Math.floor(mopGirlCost * 1.5)
        mopGirlCostAmt.innerText = mopGirlCost
        mopGirlTotal.innerText = mopGirls
        pps.innerText = patsPerSecond
    } else {
        alert('You do not have enough pats!')
    }
})

//little sweeties
const lilSweetyTotal = document.getElementById('lilSweetyTotal')
const lilSweetyCostAmt = document.getElementById('lilSweetyCost')

const lilSweetyBuyBtn = document.getElementById('lilSweetyBuyBtn').addEventListener('click', function() {
    if (pats >= lilSweetyCost) {
        lilSweeties++
        pats -= lilSweetyCost
        patsPerSecond = patsPerSecond + 22
        lilSweetyCost = Math.floor(lilSweetyCost * 1.5)
        lilSweetyCostAmt.innerText = lilSweetyCost
        lilSweetyTotal.innerText = lilSweeties
        pps.innerText = patsPerSecond
    } else {
        alert('You do not have enough pats!')
    }
})

//deutsche boy!
const dBoyTotal = document.getElementById('dBoyTotal')
const dBoyCostAmt = document.getElementById('dBoyCost')

const dBoyBuyBtn = document.getElementById('dBoyBuyBtn').addEventListener('click', function() {
    if (pats >= dBoyCost) {
        dBoys++
        pats -= dBoyCost
        patsPerSecond = patsPerSecond + 177
        dBoyCost = Math.floor(dBoyCost * 1.3)
        dBoyCostAmt.innerText = dBoyCost
        dBoyTotal.innerText = dBoys
        pps.innerText = patsPerSecond
    } else {
        alert('You do not have enough pats!')
    }
})

// game ender
const fourCostAmt = document.getElementById('fourCost')

const fourBuyBtn = document.getElementById('fourBuyBtn').addEventListener('click', function() {
    if (pats >= fourCost) {
    
        alert('You have ascended to the land of Good Boys! Congratualtions!')

        
        fourBuyBtn.removeEventListener('click', this.function())

    } else {
        alert('You do not have enough pats!')
    }
})