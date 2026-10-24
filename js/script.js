const add = function(a,b) {
	return a+b;
};

const subtract = function(a,b) {
	return a-b;
};

const sum = function(array) {
	return array.reduce((total,current)=> total+current,0);
};

const multiply = function(a,b) {
  return a * b;
};

const power = function(a,b) {
  return a ** b;
};

const divide = function(a,b) {
    return a / b;
}

const factorial = function(a) {
  let resp = 1;
  for (let i = a; i > 0; i--) {
    resp *= i;
  }
  return resp;
};


//map of operators with a key values from object

const operations = {
   "+": function(firstNumber,secondNumber) {
        return add(firstNumber,secondNumber);
   }, 

   "-": function(firstNumber,secondNumber) {
        return subtract(firstNumber,secondNumber);
   },

   "*": function(firstNumber,secondNumber){
        return multiply(firstNumber,secondNumber);
   },

   "/": function(firstNumber,secondNumber){
        return divide(firstNumber,secondNumber);
   }
};



// Operative section 

btns = document.querySelectorAll('button');
display = document.querySelector('#display');
equal = document.querySelector('#equal');

const tokens = [];  //This will catch the numbers. 


//push the elements into the array. 

btns.forEach((btn) => {   
  btn.addEventListener('click',(event)=>{
    event.preventDefault();
    if(event.target.textContent !== '='){
    tokens.push(event.target.textContent);
      console.log(tokens);
      display.value = tokens.join('');
    }
  });
});




//add reductedArray to be triggered by '=' 



equal.addEventListener('click',(event)=>{
  event.preventDefault();



const reductedArray = tokens.reduce((accumulator,currentValue) => {
  const lastItem = accumulator[accumulator.length - 1];

  if(!isNaN(currentValue) && !isNaN(lastItem)){
      accumulator[accumulator.length - 1] = lastItem + currentValue;
  }else{
      accumulator.push(currentValue);
  }
  return accumulator
},[]);

console.log(reductedArray);
display.value = String(reductedArray);
//Make here the Next step ***** I got the reduced array
let operator;

const calculatedArray = reductedArray.slice(1).reduce((accumulator,currentValue)=>{

  if(isNaN(currentValue)){
    operator = currentValue;
    
  }
  else{
  
  accumulator = operations[operator](Number(accumulator),Number(currentValue));
  }
 return accumulator;
},Number(reductedArray[0]));

  console.log(reductedArray);

  console.log(operator);

  console.log(calculatedArray);
  display.value = String(calculatedArray);

  


});

