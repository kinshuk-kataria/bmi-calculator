let heightNode = document.getElementById('height');
let heightNodeChild = document.getElementById('inches');
let weightNode = document.getElementById('weight');
let calcSystem = 'imperial';
let dropDownList = document.getElementById('units');
let bmi = document.getElementById('bmi');
let healthStatus = document.getElementById('status');

dropDownList.onchange = () => {
  if (dropDownList.value === 'meteric') {
    calcSystem = 'meterics';
    heightNodeChild.parentNode.removeChild(heightNodeChild);
    weightNode.setAttribute('placeholder', 'kilograms');
    heightNode.childNodes[1].setAttribute('placeholder', 'centimeters');
  } else if (dropDownList.value === 'imperial') {
    calcSystem = 'imperial';
    heightNode.appendChild(heightNodeChild);
    weightNode.setAttribute('placeholder', 'lbs');
    heightNode.childNodes[1].setAttribute('placeholder', 'feets');
  }
};

function calculateMeterics() {
  let inputWeight = document.getElementById('weight').value;
  let inputHeight = document.getElementById('feets').value;
  let finalEquation = parseFloat(
    (inputWeight / inputHeight / inputHeight) * 10000
  ).toFixed(1);

  let evaluation;

  if (finalEquation < 18.5) {
    evaluation = 'underweight';
  }
  if (finalEquation >= 18.5 && finalEquation <= 24.9) {
    evaluation = 'normal weight';
  }
  if (finalEquation >= 25 && finalEquation <= 29.9) {
    evaluation = 'overweight';
  }
  if (finalEquation >= 30) {
    evaluation = 'obese';
  }

  if (inputWeight <= 0 || inputHeight <= 0) {
    bmi.innerHTML = 'Please enter valid inputs! ';
  } else {
    bmi.innerHTML = `Your BMI is ${finalEquation}`;
    healthStatus.innerHTML = `Your health status is ${evaluation}`;
  }
}

function calculateImperial() {
  let inputWeight = document.getElementById('weight').value;
  let inputFeet = document.getElementById('feets').value;
  let inputInches = document.getElementById('inches').value;
  let totalInches = ((inputFeet *= 12) + +inputInches) * 0.0254;
  let metersSquared = +totalInches * +totalInches;
  let conversionWeight = (inputWeight *= 0.453592);
  let finalEquation = (+conversionWeight / +metersSquared).toFixed(1);

  let evaluation;

  if (finalEquation < 18.5) {
    evaluation = 'underweight';
  }
  if (finalEquation >= 18.5 && finalEquation <= 24.9) {
    evaluation = 'normal weight';
  }
  if (finalEquation >= 25 && finalEquation <= 29.9) {
    evaluation = 'overweight';
  }
  if (finalEquation >= 30) {
    evaluation = 'obese';
  }

  if (inputWeight <= 0 || inputFeet <= 0 || inputInches <= 0) {
    bmi.innerHTML = 'Please enter valid inputs! ';
  } else {
    bmi.innerHTML = `Your BMI is ${finalEquation}`;
    healthStatus.innerHTML = `Your health status is ${evaluation}`;
  }
}

const button = document.getElementById('btn');
button.addEventListener('click', () =>
  calcSystem === 'imperial' ? calculateImperial() : calculateMeterics()
);

const reset = document.getElementById('reset');

reset.addEventListener('click', () => clear());

function clear() {
  document.getElementById('feets').value = '';
  document.getElementById('weight').value = '';
  bmi.innerHTML = '';
  healthStatus.innerHTML = '';
  calcSystem === 'imperial'
    ? (document.getElementById('inches').value = '')
    : '';
}
