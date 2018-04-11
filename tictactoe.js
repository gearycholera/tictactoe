  var prompt = require('prompt');

  var squares = [];

  for (var i = 1; i < 10; i++) {
    if (i % 3 === 0) squares.push(`|_${i}_|\n`);
    else squares.push(`|_${i}_`);
  }

  console.log(squares.join(''))

  prompt.start();

  prompt.get(['name'], function (err, result) {
    console.log('name: ' + result.name);
  });