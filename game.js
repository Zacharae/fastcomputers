// Create a 2D array to represent the board
const board = [
	['', 'B', '', 'B', '', 'B', '', 'B'],
	['B', '', 'B', '', 'B', '', 'B', ''],
	['', 'B', '', 'B', '', 'B', '', 'B'],
	['', '', '', '', '', '', '', ''],
	['', '', '', '', '', '', '', ''],
	['R', '', 'R', '', 'R', '', 'R', ''],
	['', 'R', '', 'R', '', 'R', '', 'R'],
	['R', '', 'R', '', 'R', '', 'R', '']
];

// Define constants for piece colors
const BLACK = 'B';
const RED = 'R';

// Define a variable to keep track of whose turn it is
let currentTurn = BLACK;

// Define a function to handle a piece being clicked
function handlePieceClick(event) {
	// Get the clicked piece's row and column
	const row = event.target.dataset.row;
	const col = event.target.dataset.col;

	// Check if the clicked piece belongs to the current player
	if (board[row][col] !== currentTurn) {
		return;
	}

	// Move the piece
	// Game logic for moving pieces goes here

	// Switch turns
	currentTurn = (currentTurn === BLACK) ? RED : BLACK;
}

// Add click event listeners to each piece
const pieces = document.querySelectorAll('.piece');
pieces.forEach((piece) => {
	piece.addEventListener('click', handlePieceClick);
});
