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

const DEFAULT_CELL_COUNT = 16;
const DEFAULT_COLOR = 'white';
const DEFAULT_HIGHLIGHT = 'blue';
const DEFAULT_WIDTH = 960;
const MIN_CELL_COUNT = 1;
const MAX_CELL_COUNT = 64;

let currentCellCount = DEFAULT_CELL_COUNT;
let currentHighLight = DEFAULT_HIGHLIGHT;

// event listeners
window.addEventListener('DOMContentLoaded', () => {
  createGrid(DEFAULT_CELL_COUNT);
});

document.querySelector('.btnResize').addEventListener('click', resizeGrid);

document.querySelector('.btnClear').addEventListener('click',() => {delGrid();
   createGrid(currentCellCount);
  });

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
  
  //Add eventlistener to highlight cell on hover
  hoverHighlight();
};

// delete current grid
function delGrid() {
  const cells = document.querySelectorAll('.cell');
  
  cells.forEach((cell) => {
    cell.remove();
  });
};

//resize grid by deleting old and creating new grid based on user input
function resizeGrid() {
  //delete grid, take user input, create grid with userinput
  delGrid();
  currentCellCount = 
      prompt(`Enter number between ${MIN_CELL_COUNT} and ${MAX_CELL_COUNT}`);

  while (currentCellCount < MIN_CELL_COUNT || isNaN(currentCellCount) || currentCellCount > MAX_CELL_COUNT) {
    alert(`Error, number must be between ${MIN_CELL_COUNT} and ${MAX_CELL_COUNT}`);
    currentCellCount = 
      prompt(`Enter number between ${MIN_CELL_COUNT} and ${MAX_CELL_COUNT}`);
    }
  createGrid(currentCellCount);
  return currentCellCount; 
}

//highlight cells by adding new highlight class and applying style
function highLightCell() {
  const highLight = document.querySelectorAll('.highLighted');
  
  highLight.forEach((cell) => {
    cell.style.backgroundColor = currentHighLight;
  });
};

//highlight cell on mousehover
function hoverHighlight() {
  const cells = document.querySelectorAll('.cell');

  cells.forEach(item => {
    item.addEventListener('mouseover', () => {
      item.classList.add('highLighted');
      highLightCell();
    });
  });
};