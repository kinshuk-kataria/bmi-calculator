let heightNode = document.getElementById('height');
let heightNodeChild = document.getElementById('inches');
let weightNode = document.getElementById('weight');

const dropDownList = document.getElementById('units');

dropDownList.onchange = () => {
  if (dropDownList.value === 'meteric') {
    heightNodeChild.parentNode.removeChild(heightNodeChild);
    weightNode.setAttribute('placeholder', 'kilograms');
    heightNode.childNodes[1].setAttribute('placeholder', 'centimeters');
  } else if (dropDownList.value === 'imperial') {
    heightNode.appendChild(heightNodeChild);
    weightNode.setAttribute('placeholder', 'lbs');
    heightNode.childNodes[1].setAttribute('placeholder', 'feets');
  }
};

function calculate() {}
