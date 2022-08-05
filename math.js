//Math - It is used to perform mathematical tasks on numbers
const userInputEl = document.getElementById('userInput')
const inputEl= document.getElementById('input')
const outputEl = document.getElementById('output')
const userInput=()=>{
    let x = userInputEl.value
    inputEl.innerHTML= `Input : ${x}`
    return x
}

//Round- It rounds to its nearest number
const roundEl = document.getElementById('round')
const round = (num)=>{
    let x= Math.round(num)
    outputEl.innerHTML= `Output : ${x}`
}
roundEl.onclick = ()=> round(userInput())

//Ceil - Rounds Up to  its nearest integer
const ceilEl = document.getElementById('ceil')
const ceil= (num)=>{
    let x = Math.ceil(num)
    outputEl.innerHTML= `Output : ${x}`
}
ceilEl.onclick=()=> ceil(userInput())

//Floor - Rounded down to its nerest integer
const floorEl = document.getElementById('floor')
const floor =(num)=>{
    let x = Math.floor(num)
    outputEl.innerHTML= `Output : ${x}`
}
floorEl.onclick= ()=> floor(userInput())

//trunc - It returns integer part of num
const truncEl = document.getElementById('trunc')
const trunc =(num)=>{
    let x = Math.trunc(num)
    outputEl.innerHTML= `Output : ${x}`
}
truncEl.onclick=()=> trunc(userInput())

//Sign - It gives the sign of value
const signEl = document.getElementById('sign')
const sign =(num)=>{
    alert(`Negative- '-1', Neutral-'0', Positive- '+1'`)
    let x = Math.sign(num)
    outputEl.innerHTML= `Output : ${x}`
}
signEl.onclick=()=> sign(userInput())

//Random - Generates a random number
const randomEl = document.getElementById('random')
const random =()=>{
    alert('It generates 4 digits Random Number')
    let a = 9999
    let b = 1000
    let c = a-b
    let x= Math.floor(Math.random()* c)+b
    outputEl.innerHTML= `Output : ${x}`
}
randomEl.onclick=()=> random()

//power  - It returns the power value
const powEl = document.getElementById('pow')
const pow=(num)=>{
    let a = Number(prompt('Enter power value'))
    let x = num ** a
    outputEl.innerHTML= `Output : ${num} power ${a} is  ${x}`
}
powEl.onclick= ()=> pow(userInput())

//Date - get date
const dateEl = document.getElementById('date')
const date =()=>{
    let x = new Date()
    outputEl.innerHTML= `Output : ${x}`
}
dateEl.onclick =()=> date()