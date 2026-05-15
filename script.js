let size = 16;

function setSize(new_size){
    size = new_size;
}

function createGrid(size){
    const container = document.getElementById("container");
    container.innerHTML = ""; // clear existing cells
    for (let i = 0; i < size * size; i++){
        const cell = document.createElement("div");
        cell.classList.add("cell"); // adds class to each cell
        container.appendChild(cell);
    }
}

let color = "black";

function setColor(new_color){
    color = new_color;
}

const container = document.getElementById("container");
container.addEventListener("mouseover", function(event){
    if (event.target.classList.contains("cell")){
        event.target.style.backgroundColor = color;
    }
});

createGrid(size);
