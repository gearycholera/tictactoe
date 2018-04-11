  var prompt = require('prompt');

  var toggle = true;
  var turn = 'X';

  if (toggle) turn = 'X';
  else turn = 'O';

  var winningCombos = [123,456,789,147,258,369,159,357];

  var squares = [];
  for (var i = 1; i < 10; i++) {
    if (i % 3 === 0) squares.push(`|_${i}_|\n`);
    else squares.push(`|_${i}_`);
  }

  var takeTurn = function() {
    console.log(squares.join(''))
    prompt.start();

    prompt.get(['choose'], function (err, result) {
      var choice = +result.choose;
      console.log(turn + ' chose square ' + choice);
      if (choice-1 % 3 === 0) squares[choice-1] = `|_${turn}_|\n`;
      else squares[choice-1] = `|_${turn}_`;
      console.log(squares.join(''))
    });
  }
