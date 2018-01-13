const container = document.createElement('div');
const btn = document.createElement('button');
btn.textContent = 'New Grid';
let cell;
let input = 4;
let cells = container.childNodes;

// makes container and button and adds them
container.classList.add('container');
document.body.appendChild(container);
btn.classList.add('btn');
document.body.appendChild(btn);

function userInput(){
    return input = +prompt('Grid size?', `${input}` || 4) || 4;
}

function makeGrid(){
    for (let x = 0; x < input * input; x++){
        cell = document.createElement('div');
        cell.classList.add('cell');
        container.setAttribute('style', `grid-template-columns: repeat(${input}, 1fr);`);
        container.appendChild(cell);
    }
}

function removeGrid(){
    while(container.lastChild){
        container.removeChild(container.lastChild);
    }
}

function makeNewGrid(){
    removeGrid();
    makeGrid(userInput());
    cells.forEach(cell => cell.addEventListener('mouseover', sketch));
}

function sketch(cell){
    cell = cell.target;
    cell.setAttribute('style', `background-color: rgb(${randomsColor()}, ${randomsColor()}, ${randomsColor()}`);
}

function randomsColor(){
    return Math.floor((Math.random() * 255));
}

// makes grid on page load
makeGrid();

// make new grid on button click
btn.addEventListener('click', makeNewGrid);

// selects all cells and sketches on mouseover
cells.forEach(cell => cell.addEventListener('mouseover', sketch));