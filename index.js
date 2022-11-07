// Mock take home challenge Wordle for FAC26
const state = {
    grid: Array(6).fill().map(() => Array(5).fill('')),
    currentRow: 0,
    currentColumn: 0,
}       

function updateGrid() {
    for (let i = 0; i < state.grid.length; i++) {
        for (let j = 0; j < state.grid[i].length; j++) {
            const box = document.querySelector(`#box${i}${j}`);
            box.textContent = state.grid[i][j];
            
        }
        
    }
}

function drawBox(container, row, column, letter = '') {
    const box = document.createElement('div');
    box.className = 'box';
    box.id = `box${row}${column}`;
    box.textContent = letter;

    container.appendChild(box);
    
    return box;
}

function drawGrid(container) {
    const grid = document.createElement('div');
    grid.className = 'grid';

    for (let i = 0; i < 6; i++) {
        for (let j = 0; j < 5; j++) {
            drawBox(grid, i, j)
            
        }
    }

    container.appendChild(grid);
}



function startUp() {
    // is this the bug below?
    const game = document.querySelector("#game");
    drawGrid(game);
}

startUp();

console.log(state.grid[state.currentRow]);