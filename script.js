const players = (marker) => {
    return { marker };
};

const gameMatch = (() => {
    const player1 = players('X');
    const player2 = players('O');
    const X_CLASS = 'x';
    const CIRCLE_CLASS = 'circle';
    let circleTurn;

    const cellElements = document.querySelectorAll('[data-cell]');
    const board = document.getElementById('board');
    const winningMessageElement = document.getElementById('winningMessage');
    const winningMessageTextElement = document.querySelector('[data-winning-message-text]');
    const restartButton = document.getElementById('restartButton');
    // winning conditions
    const winningAxes = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];


    startGame();
    restartButton.addEventListener('click', startGame);

    function startGame() {
        circleTurn = false;
        cellElements.forEach(cell => {
            cell.classList.remove(player1.marker);
            cell.classList.remove(player2.marker);
            cell.removeEventListener('click', handleClick);
            cell.addEventListener('click', handleClick, { once: true });
        });
        winningMessageElement.style.display = "none";
    }

    function handleClick(e) {
        const cell = e.target;
        const currentClass = circleTurn ? player2.marker : player1.marker;
        placeMark(cell, currentClass);
        if (checkWin(currentClass)) {
            endGame(false);
        } else if (checkDraw()) {
            endGame(true);
        }
        swapTurns();
    }

    function placeMark(cell, currentClass) {
        cell.classList.add(currentClass);
    }

    function checkWin(currentClass) {
        return winningAxes.some(combination => {
            return combination.every(index => {
                return cellElements[index].classList.contains(currentClass);
            })
        })
    }

    function endGame(draw) {
        if(draw) {
            winningMessageTextElement.innerText = 'Draw!'
        } else {
            winningMessageTextElement.innerText = `${circleTurn ? "O's" : "X's"} wins!`           
        }
        winningMessageElement.style.display = 'flex';
    }

    function checkDraw() {
        return [...cellElements].every(cell => {
            return cell.classList.contains(player1.marker) ||
            cell.classList.contains(player2.marker)
        })
    }


    function swapTurns() {
        circleTurn = !circleTurn;
    }

    return {
        circleTurn,
        cellElements
    };
})();
