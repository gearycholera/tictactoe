  var prompt = require('prompt');

  // var toggle = true;
  // var turn = 'X';

  // if (toggle) turn = 'X';
  // else turn = 'O';

  var counter = 1;

  var winningCombos = ['012','345', '678', '036', '147', '258', '048', '246'];

  var squares = [];
  for (var i = 1; i < 10; i++) {
    if (i % 3 === 0) squares.push(`|_${i}_|\n`);
    else squares.push(`|_${i}_`);
  }

  var takeTurn = function(turn) {
    console.log(squares.join(''));
    prompt.start();

    prompt.get(['choose'], function (err, result) {
      var choice = +result.choose;
      console.log(turn + ' chose square ' + choice);
      if (choice % 3 === 0) squares[choice-1] = `|_${turn}_|\n`;
      else squares[choice-1] = `|_${turn}_`;
      checkForWin(squares, turn);
    });
  }

  var checkForWin = function(board, turn) {
    for (var i = 0; i < winningCombos.length; i++) {
      var spots = winningCombos[i].split('');
      if (squares[spots[0]].split('_')[1] === 'X' 
          && squares[spots[1]].split('_')[1] === 'X' 
          && squares[spots[2]].split('_')[1] === 'X') {
          console.log(squares.join(''));
          console.log('X is the winner');
          return;
      } else if (squares[spots[0]].split('_')[1] === 'O' 
          && squares[spots[1]].split('_')[1] === 'O' 
          && squares[spots[2]].split('_')[1] === 'O') {
          console.log(squares.join(''));
          console.log('O is the winner');
          return;
      }     
    }
    if (turn === 'X') takeTurn('O');
    else takeTurn('X');
  };

takeTurn('X');