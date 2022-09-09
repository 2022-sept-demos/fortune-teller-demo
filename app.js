const askButton = document.getElementById('ask');
const resetButton = document.getElementById('reset');

const inputsContainer = document.getElementById('inputs-container');
const fortuneContainer = document.getElementById('fortune-container');

askButton.addEventListener('click', () => {
    inputsContainer.classList.toggle('hide');
    fortuneContainer.classList.toggle('hide');
});

resetButton.addEventListener('click', () => {
    inputsContainer.classList.toggle('hide');
    fortuneContainer.classList.toggle('hide');
});
