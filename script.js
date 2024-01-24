/* create grid using flex box
- define constants: size of grid,
- define defaults: # of cells per row, color of cell
- use JS to create total # of divs.
  - calculate total number of divs by inputing # of cells per row and square the number
  - establish # of cells per row by dividing width of grid by # of cells per row. 
- create function to recolor a cell over mouse over by assigning additional class to div
- inputing # to change # of cells per row
  - remove all previous divs
  - create total # of divs and calculate cells
*/

const DEFAULT_CELL_COUNT = 16
const DEFAULT_COLOR = 'blue';
const DEFAULT_WIDTH = 960;

let currentCellCount = DEFAULT_CELL_COUNT;
let currentColor = DEFAULT_COLOR;

// event listeners

// create grid with total number of cells
function createGrid(cellCount) {
  const grid = document.querySelector('.grid');
  let totalCells = cellCount**2;
  let cellSize = DEFAULT_WIDTH/cellCount;

  for (let i = 1; i <= totalCells; i++) {
    const cell = document.createElement('div');
    cell.setAttribute('class','cell')
    cell.style.border = 'solid blue 1px';
    grid.appendChild(cell);
  }

  grid.style.width = `${DEFAULT_WIDTH}px`;
  grid.style.height = `${DEFAULT_WIDTH}px`;
  grid.style.flexBasis = `${DEFAULT_WIDTH}px`;

  const cells = document.querySelectorAll('.cell');

  cells.forEach((cell) => {
    cell.style.flex = `1 1 ${cellSize}px`;
    cell.style.width = `${cellSize}px`;
    cell.style.height = `${cellSize}px`;
  });
};

// delete current grid


//add new style class to cell



//clear new style class from cell

/*



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

/*
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
*/

window.onload = () => {
  createGrid(DEFAULT_CELL_COUNT)
};