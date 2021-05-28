const players = (name, marker) => {
    return {name, marker};
  };

const gameBoard = (() => {
    let board = [];

    for(let i = 0; i < 9; i++) {
        board.push("");
    }

    const squares = document.querySelector('.squares');

    board.forEach((item) => {
        const square = document.createElement('div');
        square.className = 'square';
        squares.appendChild(square);
    })

    const cellElements = document.querySelectorAll('.square');
    cellElements.forEach((square, index) => {
        square.addEventListener('click', () => {
            console.log('clicked');

            square.classList.add(game.activePlayer.marker);
            game.remainingSpot -= 1;
            game.didAnybodyWin();
            game.isItDraw();
            game.switchPlayer();

        }, {once: true});
        
    });

/*
    Array.from(squares.children).forEach((square, index) => {
        square.addEventListener('click', () => {
          console.log('clicked');
        }, {once: true})
    });
*/
    return{};
})();

const game = (() => {
    const player1 = players('player1', 'X');
    const player2 = players('player2', 'O');

    const activePlayer = player1;
    let remainingSpot = 9;

    // winning conditions
    const winningAxes = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
    ];

    function placeMark(cell, currentClass) {
        cell.classList.add(currentClass);
    }

    function switchPlayer() {
        this.activePlayer === player1 ? this.activePlayer = player2 : this.activePlayer = player1;
    }

    function didAnybodyWin() {

    }

    function isItDraw() {

    }

    return {
        activePlayer,
        remainingSpot,
        switchPlayer,
        didAnybodyWin,
        isItDraw
    };
})();