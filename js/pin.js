
function getPin() {
  const pin = generatePin();
  const pinString = pin + '';
  if(pinString.length===4){
    return pin;
  }
  else{
    return generatePin();
  }
}


function generatePin(){
  const random = Math.round(Math.random()*10000);
  return random;
}

document.getElementById('pin-generator-btn').addEventListener('click', function(){
 const newPin = getPin();
 const pinFeild = document.getElementById('pin-feild');
 pinFeild.value = newPin;
})

document.getElementById('calculator').addEventListener('click', function(event){
  const number = event.target.innerText;
  const calInputFeild = document.getElementById('cal-input-feild');
  const previousNumber = calInputFeild.value;
 if(isNaN(number)){
  if(number ==='C'){
    calInputFeild.value ='';
  }
  else if(number === '<'){
    const typeNumber = previousNumber.split('');
       typeNumber.pop();
    const remainingNumber = typeNumber.join('');
    calInputFeild.value = remainingNumber;
    
  }
  // console.log(number);
 }
 else{
  const newNumber = previousNumber + number;
  calInputFeild.value = newNumber;
 }
 
})
document.getElementById('submit-btn').addEventListener('click', function(){

  const pinFeild = document.getElementById('pin-feild');
  const pinNumber = pinFeild.value;
  console.log(pinNumber);
 
  const calInputFeild = document.getElementById('cal-input-feild');
  const currentPin = calInputFeild.value;
  console.log(currentPin);

  const pinSuccess = document.getElementById('success-btn');
  const pinFailure = document.getElementById('failure-btn');

  if(pinNumber === currentPin){

pinSuccess.style.display = 'block';
pinFailure.style.display = 'none';}
  else{
    
    pinFailure.style.display = 'block';
    pinSuccess.style.display = 'none';
  }

})