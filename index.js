function add1(a,b){
    return Number(a) + Number(b) ;
}

function subtract1(a,b){
    return a - b;
}

function multiply1(a,b){
    return a * b;
}

function divide1(a,b){
    return a / b;

}

function operate(a,operador,b){
    if (operador === '+'){
        return add1(a,b)
    } else if ( operador === '-'){
        return subtract1(a,b)
    } else if (operador === '*'){
        return multiply1(a,b)
    } else if (operador === '/'){
        return divide1(a,b)
    }
}
let secondValue = ''
let operator=''
let firstValue=''


const input = document.querySelector('#input')
const one = document.querySelector('#one')
one.classList.add('one')
one.addEventListener('click', () =>{
input.textContent += 1
 
 firstValue += one.innerHTML
}

,)

const two = document.querySelector('#two')
two.classList.add('two')
two.addEventListener('click', ()=>{
    input.textContent +=2
    firstValue += two.innerHTML
})
const three = document.querySelector('#three')
three.classList.add('three')
three.addEventListener('click', ()=>{
    input.textContent +=3
    firstValue += three.innerHTML
})
const four = document.querySelector('#four')
four.classList.add('four')
four.addEventListener('click', ()=>{
    input.textContent +=4
    firstValue += four.innerHTML
})
const five = document.querySelector('#five')
five.classList.add('five')
five.addEventListener('click', ()=>{
    input.textContent +=5
    firstValue += five.innerHTML
})
const six = document.querySelector('#six')
six.classList.add('six')
six.addEventListener('click', ()=>{
    input.textContent +=6
    firstValue += six.innerHTML
})
const seven = document.querySelector('#seven')
seven.classList.add('seven')
seven.addEventListener('click', ()=>{
    input.textContent +=7
    firstValue += seven.innerHTML
})
const eight = document.querySelector('#eight')
eight.classList.add('eight')
eight.addEventListener('click', ()=>{
    input.textContent +=8
    firstValue += eight.innerHTML
})
const nine = document.querySelector('#nine')
nine.classList.add('nine')
nine.addEventListener('click', ()=>{
    input.textContent +=9
    firstValue += nine.innerHTML
})
const cero = document.querySelector('#cero')
cero.classList.add('cero')
cero.addEventListener('click', ()=>{
    input.textContent +=0
    firstValue += cero.innerHTML
})
// OPERATORS
const plus = document.querySelector('#plus')
plus.classList.add('plus')
plus.addEventListener('click', ()=>{
    if(operator !== ''){
        
        input.textContent =''
        input.textContent += operate(secondValue,operator,firstValue)
        input.textContent += '+'
        secondValue = operate(secondValue,operator,firstValue)
        firstValue = ''
        operator = plus.innerHTML
    }else{
    
    input.textContent += '+'
    operator = plus.innerHTML
    secondValue = firstValue
    firstValue = ''
    }
})
const subtract = document.querySelector('#subtract')
subtract.classList.add('subtract')
subtract.addEventListener('click', ()=>{
    if(operator !== ''){
        
        input.textContent =''
        input.textContent += operate(secondValue,operator,firstValue)
        input.textContent += '-'
        secondValue = operate(secondValue,operator,firstValue)
        firstValue = ''
        operator = subtract.innerHTML
    }else{
    input.textContent +='-'
    operator = subtract.innerHTML
    secondValue = firstValue
    firstValue = ''
    }
})
const divide = document.querySelector('#divide')
divide.classList.add('divide')
divide.addEventListener('click', ()=>{
    if(operator !== ''){
        
        input.textContent =''
        input.textContent += operate(secondValue,operator,firstValue)
        input.textContent += '/'
        secondValue = operate(secondValue,operator,firstValue)
        firstValue = ''
        operator = divide.innerHTML
    }else{
    input.textContent +='/'
    operator = divide.innerHTML
    secondValue = firstValue
    firstValue = ''
    }
})
const multiply = document.querySelector('#multiply')
multiply.classList.add('multiply')
multiply.addEventListener('click', ()=>{
    if(operator !== ''){
        
        input.textContent =''
        input.textContent += operate(secondValue,operator,firstValue)
        input.textContent += '*'
        secondValue = operate(secondValue,operator,firstValue)
        firstValue = ''
        operator = multiply.innerHTML
    }else{
    input.textContent +='*'
    operator = multiply.innerHTML
    secondValue = firstValue
    firstValue = ''
    }
})
const equal = document.querySelector('#equal')
equal.classList.add('equal')
equal.addEventListener('click', ()=>{
    if(secondValue === ''){
        input.textContent ='MathError'
    }else {
    input.textContent =''
    input.textContent += operate(secondValue,operator,firstValue)
    }
    

})
const clear = document.querySelector('#clear')
clear.classList.add('clear')
clear.addEventListener('click', ()=>{
    input.textContent =''
    firstValue=''
    secondValue=''
    operator=''
})






