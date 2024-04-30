//Get container DOM node along with its width and height
const container = document.querySelector("#container");
const containerWidth = container.offsetWidth;
const containerHeight = container.offsetHeight;

const resizeButton = document.querySelector("#resize");
const clearButton = document.querySelector("#clear");

//builds the initial grid (16x16px)
let gridSize = 16;
buildGrid(gridSize);

//event listener for resizing the grid
resizeButton.addEventListener("click", function (e) {
    var valid = 0;
    gridSize = Number(prompt("Enter a number for the grid width and height:"));
    while(valid == 0){
        if(gridSize > 100){
            gridSize = Number(prompt("Value cannot exceed 100, please enter a number for the grid width and height:"));
        } else if(isNaN(gridSize)){
            gridSize = Number(prompt("Value is not a number, please enter a number for the grid width and height:"));
        } else {
            valid = 1;
        }
    }
    deleteGrid();
    buildGrid(gridSize);
});

//event listener for reseting the grid
clearButton.addEventListener("click", function(e){
    clearGrid(gridSize);
});


//Generates a new grid based on size
//Size: user input cannot be greater than 100
function buildGrid(size) {
    for (let row = 0; row < size; row++) {
        for (let col = 0; col < size; col++) {
            const grid = document.createElement("div");

            //set the grid size equal to the size of the container
            const gridWidth = containerWidth / size;
            grid.style.width = `${gridWidth}px`;
            const gridHeight = containerHeight / size;
            grid.style.height = `${gridHeight}px`;

            grid.classList.add("grid");

            grid.addEventListener("mouseover", colorBlack);
            container.appendChild(grid);
        }
    }
}

//deletes the existing grid
function deleteGrid(){
    while(container.firstChild){
        container.removeChild(container.firstChild);
    }
}

//clear the grid but keeps the size
function clearGrid(size){
    console.log("clearing grid");
    deleteGrid();
    buildGrid(size);
}

function colorBlack(e) {
    e.target.style.backgroundColor = "black";
}