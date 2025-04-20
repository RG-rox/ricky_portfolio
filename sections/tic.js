const ticTacToeSection = document.createElement('section');
ticTacToeSection.id = 'tic-tac-toe-section';
ticTacToeSection.innerHTML = `
  <div class="tic-container">
    <h2 class="tic-title">Tic Tac Toe</h2>
    <div class="player-select">
      <p>Choose your symbol:</p>
      <div class="symbol-buttons">
        <button onclick="setPlayerSymbol('X')" class="symbol-btn">X</button>
        <button onclick="setPlayerSymbol('O')" class="symbol-btn">O</button>
      </div>
    </div>
    <div class="tic-board" id="tic-board"></div>
    <p id="tic-status">Select your symbol to start</p>
    <button onclick="resetTicTacToe()" class="restart-btn">New Game</button>
  </div>
`;
document.body.appendChild(ticTacToeSection);

const ticStyle = document.createElement('style');
ticStyle.innerHTML = `
  #tic-tac-toe-section {
    width: 100%;
    min-height: 100vh;
    padding: 60px 20px;
    box-sizing: border-box;
    background: radial-gradient(circle at center, rgba(255, 165, 0, 0.2), #261000);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .tic-container {
    max-width: 600px;
    width: 100%;
    text-align: center;
    color: #fffaf0;
  }

  .tic-title {
    font-size: 3rem;
    margin-bottom: 30px;
    color: #ffa500;
    text-shadow: 0 0 20px #ff8c00;
    animation: glowTextOrange 2s ease-in-out infinite alternate;
    font-family: "Julius Sans One", sans-serif;
  }

  .player-select {
    margin-bottom: 20px;
  }

  .player-select p {
    font-size: 1.2rem;
    margin-bottom: 10px;
  }

  .symbol-buttons {
    display: flex;
    justify-content: center;
    gap: 20px;
    margin-bottom: 15px;
  }

  .symbol-btn {
    padding: 10px 25px;
    font-size: 1.3rem;
    background-color: rgba(255, 140, 0, 0.8);
    color: white;
    border: 2px solid #ff8c00;
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.3s ease;
    backdrop-filter: blur(5px);
  }

  .symbol-btn:hover {
    background-color: rgba(255, 165, 0, 0.9);
    transform: scale(1.05);
  }

  .tic-board {
    display: grid;
    grid-template-columns: repeat(3, 100px);
    grid-template-rows: repeat(3, 100px);
    gap: 10px;
    justify-content: center;
    margin: 20px auto;
  }

  .tic-board div {
    background: rgba(255, 255, 255, 0.1);
    border: 2px solid #ff8c00;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2.5rem;
    cursor: pointer;
    color: #fff;
    border-radius: 8px;
    transition: background 0.3s ease;
    backdrop-filter: blur(8px);
  }

  .tic-board div:hover {
    background: rgba(255, 165, 0, 0.3);
  }

  #tic-status {
    font-size: 1.2rem;
    color: #ffe6cc;
    margin: 20px 0;
    min-height: 1.2em;
  }

  .restart-btn {
    padding: 12px 25px;
    background-color: rgba(255, 140, 0, 0.8);
    color: white;
    border: 2px solid #ff8c00;
    border-radius: 8px;
    font-weight: bold;
    font-size: 1rem;
    cursor: pointer;
    transition: background-color 0.3s ease, transform 0.2s ease;
    backdrop-filter: blur(5px);
  }

  .restart-btn:hover {
    background-color: rgba(255, 165, 0, 0.9);
    transform: scale(1.05);
  }

  .player-move {
    color: #ffffff;
    text-shadow: 0 0 5px #ffa500;
  }

  .computer-move {
    color: #ffcc99;
  }

  @keyframes glowTextOrange {
    from {
      text-shadow: 0 0 5px rgba(255, 165, 0, 0.8);
    }
    to {
      text-shadow: 0 0 25px #ff8c00, 0 0 40px #ff7000;
    }
  }
`;
document.head.appendChild(ticStyle);

const ticScript = document.createElement('script');
ticScript.innerHTML = `
  const ticBoard = document.getElementById('tic-board');
  const ticStatus = document.getElementById('tic-status');
  let playerSymbol = '';
  let computerSymbol = '';
  let currentTurn = '';
  let ticCells = Array(9).fill(null);
  let gameActive = false;

  function setPlayerSymbol(symbol) {
    if (gameActive) return;
    
    playerSymbol = symbol;
    computerSymbol = symbol === 'X' ? 'O' : 'X';
    gameActive = true;
    
    // Clear the board first
    ticBoard.innerHTML = '';
    ticCells = Array(9).fill(null);
    
    // Create cells
    for (let i = 0; i < 9; i++) {
      const cell = document.createElement('div');
      cell.addEventListener('click', () => handlePlayerMove(i, cell));
      ticBoard.appendChild(cell);
    }
    
    document.querySelector('.player-select').style.display = 'none';
    
    // X always goes first in traditional Tic Tac Toe
    currentTurn = 'X';
    
    updateStatus();
    
    // If computer is X, it goes first
    if (computerSymbol === 'X') {
      setTimeout(makeComputerMove, 700);
    }
  }

  function updateStatus() {
    if (currentTurn === playerSymbol) {
      ticStatus.textContent = "Your turn";
    } else {
      ticStatus.textContent = "Computer's turn...";
    }
  }

  function checkWinner() {
    const winCombos = [
      [0,1,2],[3,4,5],[6,7,8],
      [0,3,6],[1,4,7],[2,5,8],
      [0,4,8],[2,4,6]
    ];
    
    for (let combo of winCombos) {
      const [a, b, c] = combo;
      if (ticCells[a] && ticCells[a] === ticCells[b] && ticCells[a] === ticCells[c]) {
        return ticCells[a];
      }
    }
    
    return ticCells.includes(null) ? null : 'Draw';
  }

  function handlePlayerMove(index, cell) {
    // Check if cell is already filled or if it's not player's turn or game is over
    if (ticCells[index] || currentTurn !== playerSymbol || !gameActive) return;
    
    // Make player's move
    ticCells[index] = playerSymbol;
    cell.textContent = playerSymbol;
    cell.classList.add('player-move');
    
    // Check for win or draw
    const result = checkWinner();
    if (result) {
      endGame(result);
      return;
    }
    
    // Switch turn to computer
    currentTurn = computerSymbol;
    updateStatus();
    
    // Let computer make its move after a short delay
    setTimeout(makeComputerMove, 700);
  }

  function makeComputerMove() {
    if (!gameActive) return;
    
    // Find available cells
    const availableCells = [];
    ticCells.forEach((cell, index) => {
      if (cell === null) {
        availableCells.push(index);
      }
    });
    
    // Check if there are available moves
    if (availableCells.length === 0) return;
    
    // Choose random cell from available cells
    const randomIndex = Math.floor(Math.random() * availableCells.length);
    const cellIndex = availableCells[randomIndex];
    
    // Make computer's move
    ticCells[cellIndex] = computerSymbol;
    const cellElement = ticBoard.children[cellIndex];
    cellElement.textContent = computerSymbol;
    cellElement.classList.add('computer-move');
    
    // Check for win or draw
    const result = checkWinner();
    if (result) {
      endGame(result);
      return;
    }
    
    // Switch turn to player
    currentTurn = playerSymbol;
    updateStatus();
  }

  function endGame(result) {
    gameActive = false;
    
    if (result === 'Draw') {
      ticStatus.textContent = "It's a draw!";
    } else if (result === playerSymbol) {
      ticStatus.textContent = "You win!";
    } else {
      ticStatus.textContent = "Computer wins!";
    }
    
    // Show the player selection for a new game
    document.querySelector('.player-select').style.display = 'block';
  }

  function resetTicTacToe() {
    gameActive = false;
    ticCells = Array(9).fill(null);
    ticBoard.innerHTML = '';
    playerSymbol = '';
    computerSymbol = '';
    currentTurn = '';
    ticStatus.textContent = "Select your symbol to start";
    document.querySelector('.player-select').style.display = 'block';
  }

  // Initialize the empty board
  for (let i = 0; i < 9; i++) {
    const cell = document.createElement('div');
    ticBoard.appendChild(cell);
  }
`;
document.body.appendChild(ticScript);