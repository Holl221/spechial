const resultElement = document.getElementById('result');
const generateButton = document.getElementById('generate');

function  generateRandomNumber() {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    resultElement.textContent = `Случайное число: ${randomNumber}`;
}

generateButton.addEventListener('click', generateRandomNumber);