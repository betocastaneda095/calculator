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
btns.forEach((btn) =>{
  btn.addEventListener('click', (event) => {
    const target = event.target;
    console.log(target.classList);

    switch(true){

      case target.classList.contains('number'): 
      let firstNumber = parseInt(target.textContent);
      console.log(firstNumber);
      break;
      
      case target.classList.contains('operator'):
        switch(true){
          case target.id == 'minus': 
          console.log(target.id);
            // sustract(firstNumber,secondNumber);
          break;  

          case target.id == 'mult': 
          console.log(target.id);
            // multiply(firstNumber,secondNumber);
          break;

          case target.id == 'plus': 
          console.log(target.id);
            // add(firstNumber,secondNumber);
          break;  
          
          case target.id == 'division': 
          console.log(target.id);
            // divide(firstNumber,secondNumber);
          break;            
        }
      break;
    }
  });
})