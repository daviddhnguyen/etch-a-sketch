const grid = document.querySelector('.grid');

let gridItemsPerColumn = 100;
let totalBoxes = gridItemsPerColumn**2;

let gridWidth = 960;
let gridHeight = gridWidth;

grid.style.width = `${gridWidth}px`;
grid.style.height = `${gridHeight}px`;

let boxSize = gridWidth/gridItemsPerColumn;

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

boxes.forEach((box) => {
  box.style.flex = `1 1 ${boxSize}px`;
  box.style.width = `${boxSize}px`;
  box.style.height = `${boxSize}px`;
})

boxes.forEach((item) => {
  item.addEventListener('mouseover', () => {
    item.className += ' coloredBox';
  });
});