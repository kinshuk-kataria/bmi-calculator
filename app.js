let heightNode = document.getElementById('height');
let heightNodeChild = document.getElementById('inches');
let weightNode = document.getElementById('weight');
let calcSystem = 'imperial';

const dropDownList = document.getElementById('units');

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

  console.log('In meteruics');
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

  console.log(finalEquation);
}

function calculateImperial() {
  let inputWeight = document.getElementById('weight').value;
  let inputFeet = document.getElementById('feets').value;
  let inputInches = document.getElementById('inches').value;
  let totalInches = ((inputFeet *= 12) + +inputInches) * 0.0254;
  let metersSquared = +totalInches * +totalInches;
  let conversionWeight = (inputWeight *= 0.453592);
  let finalEquation = (+conversionWeight / +metersSquared).toFixed(1);
  console.log('in imerial');
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
  console.log(finalEquation);
}

const button = document.getElementById('btn');
button.addEventListener('click', () =>
  calcSystem === 'imperial' ? calculateImperial() : calculateMeterics()
);
