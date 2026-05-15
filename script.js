let size = 16;

function createGrid(size){
    const container = document.getElementById("container");
    container.innerHTML = ""; // clear existing cells

    const cell_size = 960 / size;

    for (let i = 0; i < size * size; i++){
        const cell = document.createElement("div");
        cell.classList.add("cell"); // adds class to each cell

        cell.style.width = `${cell_size}px`;
        cell.style.height = `${cell_size}px`;

        container.appendChild(cell);
    }
}

const size_button = document.getElementById("grid_size");
size_button.addEventListener("click", function(){
    let user_input = prompt("Please enter number between 1 and 100");
    if (user_input === null){
        console.log("User cancelled the prompt.");
        return;
    }
    user_input = Number(user_input); // convert str to int
    if (user_input > 0 && user_input <= 100){
        createGrid(user_input);
    }
    else{
        alert("Sorry, your input is incorrect. Please enter a number between 1 and 100.");
    }
});

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
