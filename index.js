const decimalNumber = document.querySelector(".decimalNumber");
const binaryNumber = document.querySelector(".binaryNumber");
const decimalWithSignal = document.querySelector(".decimalWithSignal");
const hexadecimal = document.querySelector(".hexadecimal");
const btnSubmit = document.querySelector(".btn-submit");


const convertDecimalToBinary = (number) => {
    return (number >>> 0).toString(2);
}

const convertDecimalToHexadecimal = (number) => {
    return ("0" + (Number(number).toString(16))).slice(-2).toUpperCase()
}

const convertDecimalToOctal = (number) => {
    return parseInt(number, 8).toString(10);
}

decimalNumber.addEventListener('change', (e) => {
    const number = e.target.value;
    binaryNumber.value = convertDecimalToBinary(number);
    decimalWithSignal.value = convertDecimalToOctal(number);
    hexadecimal.value = convertDecimalToHexadecimal(number);
});


btnSubmit.addEventListener('click', (e) => {
    const number = decimalNumber.value;
    binaryNumber.value = convertDecimalToBinary(number);
    decimalWithSignal.value = convertDecimalToOctal(number);
    hexadecimal.value = convertDecimalToHexadecimal(number);
});


