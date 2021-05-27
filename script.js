const players = (name, marker) => {
    return {name, marker};
  };

const gameBoard = (() => {
    const player1 = players('player1', 'X');
    const player2 = players('player2', 'O');

    let board = [];

    for(let i = 0; i < 9; i++) {
        board.push("");
    }

    let squares = document.querySelector('.squares');

    board.forEach((item, index) => {
        const square = document.createElement('div');
        square.setAttribute('id', index);
        square.className = 'square';
        squares.appendChild(square);
    })
})();

const game = (() => {

})();