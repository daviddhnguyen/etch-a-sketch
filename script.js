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

// create grid defined by # of cells per row and default width
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