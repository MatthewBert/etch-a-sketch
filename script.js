//Get container DOM node along with its width and height
const container = document.querySelector("#container");
const containerWidth = container.offsetWidth;
const containerHeight = container.offsetHeight;

buildGrid();

function buildGrid(){
    for(let row = 0; row < 16; row++){
        for(let col = 0; col < 16; col++){
            const grid = document.createElement("div");
    
            //set the grid size equal to the size of the container
            const gridWidth = containerWidth/16;
            grid.style.width = `${gridWidth}px`;
            const gridHeight = containerHeight/16;
            grid.style.height = `${gridHeight}px`;
    
            grid.classList.add("grid");
    
            grid.addEventListener("mouseover", colorBlack)
            container.appendChild(grid);
        }
    }
}

function colorBlack(e){
    e.target.style.backgroundColor = "black";
}