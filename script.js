

const colorBox = document.getElementById("colorBox");
const colorOptionsContainer = document.getElementById("colorOptions");
const gameStatus = document.getElementById("gameStatus");
const scoreDisplay = document.getElementById("score");
const newGameButton = document.getElementById("newGameButton");

let score = 0;

// Function to generate a random hex color
function getRandomColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
}

// Function to start a new game
function startGame() {
    colorOptionsContainer.innerHTML = "";  // Clear previous options
    gameStatus.textContent = "";  // Reset game status
    
    // Generate 6 random colors
    let colors = Array.from({ length: 6 }, getRandomColor);

    // Pick one color as the correct answer
    let correctColor = colors[Math.floor(Math.random() * colors.length)];

    // Display the correct color in the colorBox
    colorBox.style.backgroundColor = correctColor;

    // Create buttons for color options
    colors.forEach(color => {
        let button = document.createElement("button");
        button.style.backgroundColor = color;
        button.setAttribute("data-testid", "colorOption");
        
        // Check if the clicked button is correct
        button.addEventListener("click", () => checkGuess(color, correctColor));

        colorOptionsContainer.appendChild(button);
    });
}

// Function to check the player's guess
function checkGuess(selectedColor, correctColor) {
    if (selectedColor === correctColor) {
        gameStatus.textContent = "Correct!";
        gameStatus.style.color = "green";
        score++;
        scoreDisplay.textContent = score;
    } else {
        gameStatus.textContent = "Wrong! Try again.";
        gameStatus.style.color = "red";
    }
}

// Event listener for the new game button
newGameButton.addEventListener("click", startGame);

// Start the game initially
startGame();
