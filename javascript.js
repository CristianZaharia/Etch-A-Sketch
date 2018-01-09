const container = document.createElement('div');
let row


container.classList.add('container');
document.body.appendChild(container);

for (let x = 0; x < 16; x++){
    row = document.createElement('div');
    row.classList.add('row');
    container.appendChild(row);
}

function sketch(row){
    row = row.target;
    console.log(row);
    row.classList.add('row-colored');
    row.setAttribute('style', `background-color: rgb(${randomsColor()}, ${randomsColor()}, ${randomsColor()}`);
}

function randomsColor(){
    return Math.floor((Math.random() * 255));
}

let rows = container.childNodes;

rows.forEach(row => row.addEventListener('mouseover', sketch));