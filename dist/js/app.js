/**
 take the bill input
take the precentage input
take the number of people

the bill * 0.precentage ammoun / number of people

function calculate tip we call everytime we make change
 */
//input elements
const billElement = document.getElementById('bill')
const buttons = document.querySelectorAll('.btn')
const numPeopleElement = document.getElementById('number')
const customPrecentageElement = document.getElementById('custom')
const resetBtn = document.getElementById('reset')
const errorMsg = document.querySelector('.error-msg')
//output elements
const tipOutput = document.getElementById('tipOutput')
const totalOutput = document.getElementById('totalOutput')

//our intialisers
let precentage = 0.05 // default precentage 5%
let Customprecentage = 0
let numberOfPoeple = 0
let bill = 0
let tipAmount = 0
let total = 0



//take custom precentage
customPrecentageElement.addEventListener('keyup',e=>{
    precentage = parseFloat(e.target.value / 100) || 0; // default to zero if input isnt valid
    calcTip()
})

//take button precentage
buttons.forEach(btn=>{
    btn.addEventListener('click',()=>{
        //getting value from button and converting it into a number
        precentage = parseFloat(btn.textContent.replace('%','') / 100) || 0; // default to zero if input isnt valid
        calcTip()
        customPrecentageElement.value = ''; // Clear custom percentage input
    })
})

//get the bill 
billElement.addEventListener('keyup',e=>{
    bill = e.target.value
    calcTip()
})
//get the number of people
numPeopleElement.addEventListener('keyup',e=>{
    if(parseFloat(e.target.value) == 0){    
        console.log(false)    
        //precangtage validation
        numPeopleElement.classList.add('input-error')
        errorMsg.classList.remove('display-none')
    }else if(parseFloat(e.target.value) > 0){
        console.log(true)
        console.log(e.target.value)
        numberOfPoeple = e.target.value
        numPeopleElement.classList.remove('input-error')
        errorMsg.classList.add('display-none')
        calcTip()
    }
})

let calcTip = ()=>{
    //dont calculate unless these number filled
    if(bill != 0 && numberOfPoeple != 0){
        total = bill / numberOfPoeple
        tipAmount = bill * precentage / numberOfPoeple
        totaltip = total + tipAmount
        //to fixed cut everything after 0.00 to give a two number post decimeal 
        totalOutput.textContent = '$'+Number(totaltip.toFixed(2))
        tipOutput.textContent = '$'+Number(tipAmount.toFixed(2))
    }
}

resetBtn.addEventListener('click',()=>{
    const textInputs = document.querySelectorAll('input[type="text"]');
    bill = 0
    precentage = 0.05
    totalOutput.textContent = '$0.00'
    tipOutput.textContent = '$0.00'
    textInputs.forEach(input=>{
        input.value = '';
    })
    calcTip()
})