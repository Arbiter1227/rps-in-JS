main();

function main() {
  console.clear();
  console.log('Choose an option by number.');
  console.log();
  console.log('1. Rock');
  console.log('2. Paper');
  console.log('3. Scissors');
  console.log();
  var answer = prompt('');
  if (answer == '1' || answer == '2' || answer == '3') {
    var ran = (Math.floor((Math.random() * 3) + 1));
    var responses = [
      '',
      'rock',
      'paper',
      'scissors'
    ];
    answer = responses[answer];
    ran = responses[ran];
    if (answer == ran) {
      var result = 'tie';
    }
    else if (answer == 'rock') {
      if (ran == 'paper') {
        var result = 'lose';
      }
      else if (ran == 'scissors') {
        var result = 'win';
      }
    }
    else if (answer == 'paper') {
      if (ran == 'rock') {
        var result = 'win';
      }
      else if (ran == 'scissors') {
        var result = 'lose';
      }
    }
    else if (answer == 'scissors') {
      if (ran == 'paper') {
        var result = 'win';
      }
      else if (ran == 'rock') {
        var result = 'lose';
      }
    }
    console.log();
    if (result == 'tie') {
      console.log('Tie! Nobody wins.');
    }
    else {
      console.log(`The bot chose ${ran}, and since you chose ${answer}, you ${result}!`);
    }
    console.log();
    console.log('(type anything or press enter to play again)');
    console.log();
    prompt('');
    main();
  }
  else {
    main();
  }
}