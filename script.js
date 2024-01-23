const DEFAULT_SIZE = 16
const DEFAULT_COLOR = 'blue';

let currentSize = DEFAULT_SIZE;

function userSquareInput() {
  let whileTrue = true;

  while (whileTrue = true) {
    let itemsPerColumn = prompt('Enter number of squares per side'); 
    itemsPerColumn = Number(itemsPerColumn);
    if (typeof itemsPerColumn === 'number' && itemsPerColumn > 0 && itemsPerColumn <= 64) {
      whileTrue = false;
      console.log(itemsPerColumn);
      return itemsPerColumn;
    } else {
      alert('Number must be between 1 and 64');
    }
  }
}

//prompt user for grid dimensions and clears board
const btnResize = document.querySelector('.btnResize');

btnResize.addEventListener('click', () => {
  createGrid(userSquareInput());
});

//create square grid with boxes defined by size and items
function createGrid(gridItemsPerColumn) {
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
  
  const boxes = document.querySelectorAll('.box');

  boxes.forEach((cell) => {
    cell.style.flex = `1 1 ${cellSize}px`;
    cell.style.width = `${cellSize}px`;
    cell.style.height = `${cellSize}px`;
  })
}

//standardize box sizes


//create colored boxes when mouse hovers
const boxes = document.querySelectorAll('.box');

boxes.forEach((item) => {
  item.addEventListener('mouseover', () => {
    item.className += ' coloredBox';
  });
});

//click button to clear cells
const btnClear = document.querySelector('.btnClear');

btnClear.addEventListener('click', () => {
  boxes.forEach((item) => {
    item.className -= 'coloredBox';
  });
});

window.onload = () => {
  createGrid(DEFAULT_SIZE)
}