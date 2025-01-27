const container = document.querySelector("#container");
const input = document.querySelector("#user-input");
const submitButton = document.querySelector("#submit-input")

// Colors for "pixels" on canvas
const DEFAULT_COLOR = "#F2EFE9";
const HOVER_COLOR = "#252627";

// Create grid of divs to act as the canvas
function createGrid(size) {
    // Create loop that runs for each row
    for (let y = 1; y <= size; y++) {
        const rowDiv = document.createElement("div");
        rowDiv.setAttribute("id", "row-container");
        for (let x = 1; x <= size; x++) {
            const columnDiv = document.createElement("div");
            columnDiv.style.backgroundColor = DEFAULT_COLOR;
            columnDiv.addEventListener("mouseover", () => {
                columnDiv.style.backgroundColor = HOVER_COLOR;
            });
            rowDiv.appendChild(columnDiv);
        }
        container.appendChild(rowDiv)
    }
        // Create a new div element
        // Add hover event to change color
        // Create a nested loop for each column
            // Create a new div element 
            // Add mouseover event listener to change color
            // Append div element to row div
        // Append row div to container
}

// Remove divs from grid
function resetGrid() {
    const rowDivs = document.querySelectorAll("#container div")
    rowDivs.forEach((div) => div.remove());

}

// Change grid size based on user input
submitButton.addEventListener("click", () => {
    let userInput = +input.value;
    if (!userInput) userInput = 16;
        resetGrid();
        createGrid(userInput);
        input.value = "";
});

// On initial start up
createGrid(16);

