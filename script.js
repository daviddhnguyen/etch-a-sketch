//prompt user for grid dimensions and clears board
const btnResize = document.querySelector('.btnResize');

let gridItemsPerColumn = 16;

function userSquareInput() {
  gridItemsPerColumn = prompt('Enter # of squares per side', 16);
  return gridItemsPerColumn
}

//create square grid with boxes defined by size and items

const grid = document.querySelector('.grid');

let totalBoxes = gridItemsPerColumn**2;

let gridWidth = 600;
let gridHeight = gridWidth;

grid.style.width = `${gridWidth}px`;
grid.style.height = `${gridHeight}px`;
grid.style.flexBasis = `${gridHeight}px`;
grid.style.border = 'solid 5px blue';

let cellSize = gridWidth/gridItemsPerColumn;

console.log(totalBoxes);

for (let i = 1; i <= totalBoxes; i++) {
  const box = document.createElement('div');
  
  box.setAttribute('class',"box");
  
  //const node = document.createTextNode(i);
  //box.appendChild(node);
  
  box.style.border = 'solid 1px blue';
  
  grid.appendChild(box);
  //console.log(grid);
}


//standardize box sizes
const boxes = document.querySelectorAll('.box');

boxes.forEach((cell) => {
  cell.style.flex = `1 1 ${cellSize}px`;
  cell.style.width = `${cellSize}px`;
  cell.style.height = `${cellSize}px`;
})

//create colored boxes when mouse hovers

boxes.forEach((item) => {
  item.addEventListener('mouseover', () => {
    item.className += ' coloredBox';
  });
});

//create button to clear cells
const btnClear = document.querySelector('.btnClear');

btnClear.addEventListener('click', () => {
  boxes.forEach((item) => {
    item.className -= 'coloredBox';
  });
});