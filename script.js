let size = 16; // default grid size

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
    darken_mode = false;
});

let darken_mode = false;
const darken = document.getElementById("darken");
darken.addEventListener("click", function(){
    darken_mode = true;
    random_mode = false;
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
        else if (darken_mode){
            const dark_percent = 25.5 // 10% of 255
            let current_color = window.getComputedStyle(event.target).backgroundColor; // use to read the final css, will rgba(0, 0, 0, 0) if nothing was set

            if (current_color === "rgba(0, 0, 0, 0)"){ // if cell transparent make it white to be able to darken it
                current_color = "rgb(255, 255, 255)";
            }

            // finds numbers in string "rgb(0, 0, 0)" \d digit 0-9, + one or mode digits, g global find all
            let rgb_values = current_color.match(/\d+/g);
            let r = Number(rgb_values[0]); // get value and convert str to int
            let g = Number(rgb_values[1]);
            let b = Number(rgb_values[2]);

            r = Math.max(0, Math.floor(r - dark_percent));
            g = Math.max(0, Math.floor(g - dark_percent));
            b = Math.max(0, Math.floor(b - dark_percent));

            event.target.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
        }
        else{
            event.target.style.backgroundColor = color;
        }
    }
});

createGrid(size);
