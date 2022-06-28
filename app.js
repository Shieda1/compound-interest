// vedio that demonstrates compound interest formula (Compound Interest Formula Explained, Investment, Monthly & Continuously, Word Problems, Algebra)

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const n = document.getElementById('n');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

const radioA = document.getElementById('radioA');
const radioP = document.getElementById('radioP');
const radioR = document.getElementById('radioR');
const radiot = document.getElementById('radiot');

let A;
let P = v1;
let R = v2;
let t = v3;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');
const variable3 = document.getElementById('variable3');

let compoundFrequency = 1;

radioA.addEventListener('click', function() {
  variable1.textContent = 'Enter the initial investment';
  variable2.textContent = 'Enter the interest rate';
  variable3.textContent = 'How many years do you want to keep your investment?';
  P = v1;
  R = v2;
  t = v3; 
});
radioP.addEventListener('click', function() {
  variable1.textContent = 'Enter the principal';
  variable2.textContent = 'Enter the interest rate';
  variable3.textContent = 'How many years do you want to keep your investment?';
  A = v1;
  R = v2;
  t = v3; 
});
radioR.addEventListener('click', function() {
  variable1.textContent = 'Enter the principal';
  variable2.textContent = 'Enter the initial investment';
  variable3.textContent = 'How many years do you want to keep your investment?';
  A = v1;
  P = v2;
  t = v3; 
});
radiot.addEventListener('click', function() {
  variable1.textContent = 'Enter the principal';
  variable2.textContent = 'Enter the initial investment';
  variable3.textContent = 'Enter the interest rate';
  A = v1;
  P = v2;
  R = v3; 
});

n.addEventListener('click', function() {
  switch(true) {
    case n.value === 'annually' :
      compoundFrequency = 1;
      break;
    case n.value === 'semiannually' :
      compoundFrequency = 2;
      break;
    case n.value === 'quarterly' :
      compoundFrequency = 4;
      break;
    case n.value === 'monthly' :
      compoundFrequency = 12;
      break;
    case n.value === 'weekly' :
      compoundFrequency = 52;
      break;
    default :
      compoundFrequency = 365;
      break;
  }
});

btn.addEventListener('click', function() {
  if(radioA.checked)
    result.textContent = `A = $${computeA().toFixed(2)}`;
  else if(radioP.checked)
    result.textContent = `P = $${computeP().toFixed(2)}`;
  else if(radioR.checked)
    result.textContent = `R = ${computeR().toFixed(2)}%`;
  else if(radiot.checked)
    result.textContent = `t = ${computet().toFixed(2)} years`;
})


function computeA() {
  // compund interest formola
  return P.value * Math.pow((1 + ((R.value / 100) / compoundFrequency)), (t.value * compoundFrequency));
}

function computeP() {
  return A.value / Math.pow((1 + ((R.value / 100) / compoundFrequency)), (t.value * compoundFrequency));
}

function computeR() {
  return (compoundFrequency * ( (Math.pow(A.value / P.value, 1 / (compoundFrequency * t.value))) - 1)) * 100;
}

function computet() {
  return Math.log(A.value / P.value) / (compoundFrequency * (Math.log(1 + ((R.value / 100) / compoundFrequency))));
}