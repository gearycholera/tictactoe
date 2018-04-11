  var prompt = require('prompt');

  prompt.start();

  prompt.get(['name'], function (err, result) {
    console.log('name: ' + result.name);
  });