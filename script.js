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
        size = user_input;
    }
    else{
        alert("Sorry, your input is incorrect. Please enter a number between 1 and 100.");
    }
});

const reset_button = document.getElementById("reset");
reset_button.addEventListener("click", function (){
    createGrid(size);
});

let color = "black";
let random_mode = false;

const random_color = document.getElementById("random_color");
random_color.addEventListener("click", function(){
    random_mode = true;
});

const container = document.getElementById("container");
container.addEventListener("mouseover", function(event){
    if (event.target.classList.contains("cell")){
        if (random_mode){
            const r = Math.floor(Math.random() * 256); // random 0-1 * 256 = get random numbers 0-255; floor to remove decimal
            const g = Math.floor(Math.random() * 256);
            const b = Math.floor(Math.random() * 256);

            event.target.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
        }
        else{
            event.target.style.backgroundColor = color;
        }
    }
});

createGrid(size);
