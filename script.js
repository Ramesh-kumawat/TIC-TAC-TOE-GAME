// Select all elements with the class "box" (game board squares)
let boxes = document.querySelectorAll(".box");

// Select the reset button
let resetButton = document.querySelector("#myResetBtn");

// Select the new game button
let newGameBtn = document.querySelector("#newGame");

// Select the message element
let msg1 = document.querySelector("#msg");

// Initialize the move counter
let count = 0;

// Initialize the turn variable (true for player O, false for player X)
let turn = true;

// Define the winning patterns on the game board
const winPattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

// Add an event listener to each box element
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        // Check if it's player O's turn
        if (turn) {
            // Fill the box with an "O"
            box.innerText = "O";
            // Switch the turn to player X
            turn = false;
        } else {
            // Fill the box with an "X"
            box.innerText = "X";
            // Switch the turn to player O
            turn = true;
        }
        // Disable the box to prevent further clicks
        box.disabled = true;
        // Check if there's a winner
        checkWinner();
    });
});

// Function to display a congratulatory message with the winner's symbol
const showWinner = (winner) => {
    // Set the message color to green
    msg1.style.color = "green";
    // Set the message text to "Congratulations, Winner is [winner]"
    msg1.innerText = `Congratulation, Winner is ${winner}`;
    // Remove the "hide" class from the message container
    // newContainer.classList.remove("hide");
};

// Function to display a message indicating that the game is a draw
const Draw1 = () => {
    // Set the message color to red
    msg1.style.color = "red";
    // Set the message text to "The Game is Draw"
    msg1.innerText = 'The Game is Draw';
    // Remove the "hide" class from the message container
    // newContainer.classList.remove("hide");
};

// Function to disable all box elements
const disableBtn = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
};

// Function to enable all box elements and reset their text content
const enableBox = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
};

// Function to check if there's a winner
const checkWinner = () => {
    count++;
    for (let pattern of winPattern) {
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;
        if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
            if (pos1Val === pos2Val && pos2Val === pos3Val) {
                // Open the navigation menu
                openNav();
                // Disable all box elements
                disableBtn();
                // Display the winner's message
                showWinner(pos1Val);
            }
            if (count == 9) {
                // Open the navigation menu
                openNav();
                // Disable all box elements
                disableBtn();
                // Display the draw message
                Draw1();
            }
        }
    }
};

// Function to reset the game
const resetGame = () => {
    turn = true;
    enableBox();
    closeNav();
    count = 0;
};

// Add event listeners to the reset button and new game button
newGameBtn.addEventListener("click", resetGame);
resetButton.addEventListener("click", resetGame);

// Function to open the navigation menu
function openNav() {
    document.getElementById("myNav").style.width = "100%";
}

// Function to close the navigation menu
function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}

  


























