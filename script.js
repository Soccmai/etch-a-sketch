const grid = document.querySelector('.grid-container');
const userInput = document.getElementById('quantity');
const resetButton = document.querySelector('.reset');
const showQuantity = document.querySelector('.show-quantity');

function createGrid() {
    for ( let i = 0; i < 256; i++){
        const div = document.createElement('div');
        div.classList.add('square');
        grid.appendChild(div);
    }
};

function updateGrid() {
    grid.innerHTML = '';
    grid.style.setProperty(
        'grid-template-columns',
        `repeat(${userInput.value}, 2fr)`
    );
    grid.style.setProperty(
        'grid-template-rows',
        `repeat(${userInput.value}, 2fr)`
    );
    for (let i = 0; i < userInput.value * userInput.value; i++) {
        const div = document.createElement("div");
        div.classList.add("square");
        grid.appendChild(div);
    }
    console.log(userInput.value);
    showQuantity.innerHTML = userInput.value + ' X ' + userInput.value;
};

const color = document.querySelector('#color');
color.addEventListener('input', e => {
    document.documentElement.style.setProperty('--color', color.value)
})

const square = document.querySelector('div');
square.addEventListener('mouseover', e => {
    e.target.classList.replace('square', 'color');
});
square.addEventListener('touchmove', e => {
    e.target.classList.replace('square', 'color');
});

userInput.addEventListener('change', updateGrid);

resetButton.addEventListener('click',function(e) {
    grid.innerHTML = '';
    userInput.value = '';
    grid.style.setProperty('grid-template-columns', `repeat(16, 2fr)`);
    grid.style.setProperty('grid-template-rows', `repeat(16, 2fr)`);
    userInput.value = 16;
    showQuantity.innerHTML = '16 X 16';
    createGrid();
});
  

createGrid();