// 
const calcIO = document.getElementById('calc-io');
const buttons = document.querySelectorAll('.btn');

let firstValue;
let secondValue;
let selecteOption;

buttons.forEach((button) => {
  button.addEventListener('click' , () => {
    
    if(button.classList.contains('symbol') && button.id !== 'equal') {
      // armazena o pimeiro valor e a opção
      firstValue =  Number(calcIO.value);
      selecteOption = button.id;
      calcIO.value = '';
    } else if (button.id === 'equal') {
      // armazenar o segundo valor e usar a função claculate
      secondValue = Number(calcIO.value);
      calcIO.value = calculate(selecteOption, firstValue, secondValue)
    } else {
      calcIO.value += button.value;
    }
  });
});


// sum, subtract, multiply e devide
const calculate = (option, num1, num2) => {
  switch (option) {
    case 'sum':
      return num1 + num2;

    case 'subtract':
      return num1 - num2;

    case 'multiply':
      return num1 * num2;

    case 'devide':
      return num1 / num2;

    default:
      console.log('Erro ao aceder a opção');
      break;
  }
}
