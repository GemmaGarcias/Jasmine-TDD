function rockPaperScissors () {

	 if (arguments.length === 1) {
    var combinations = ['PAPER', 'SCISSORS', 'ROCK']
    var random = Math.floor(Math.random() * 3) //num random between 0 - 2 (both included)

    arguments[1] = combinations[random]
  }

  var movePlayer1 = arguments[0]
  var movePlayer2 = arguments[1]

	/*----------------- PAPER ------------------------*/
		if (movePlayer1 === 'PAPER'){
			if(movePlayer2 === 'ROCK'){
				return movePlayer1 + ' vs ' + movePlayer2 + ' => ' + movePlayer1 + ' wins!'
			}
			else if(movePlayer2 === 'SCISSORS'){
				return movePlayer2 + ' vs ' + movePlayer1 + ' => ' + movePlayer2 + ' wins!'
			}
			 else if (movePlayer2 === 'PAPER') {
	      return movePlayer1 + ' vs ' + movePlayer2 + ' => tie!'
	    }
		 else {return 'CHOOSE AGAIN'}
	}

	  /*----------------- SCISSORS ------------------------*/
		if (movePlayer1 === 'SCISSORS') {
	    if (movePlayer2 === 'ROCK') {
	      return movePlayer1 + ' vs ' + movePlayer2 + ' => ' + movePlayer2 + ' wins!'
	    } else if (movePlayer2 === 'PAPER') {
	      return movePlayer1 + ' vs ' + movePlayer2 + ' => ' + movePlayer1 + ' wins!'
	    } else if (movePlayer2 === 'SCISSORS') {
	      return movePlayer1 + ' vs ' + movePlayer2 + ' => tie!'
	    }
	  else {return 'CHOOSE AGAIN'}
	}

  /*----------------- ROCK ------------------------*/
	  if (movePlayer1 === 'ROCK') {
	    if (movePlayer2 === 'PAPER') {
	      return movePlayer1 + ' vs ' + movePlayer2 + ' => ' + movePlayer2 + ' wins!'
	    } else if (movePlayer2 === 'SCISSORS') {
	      return movePlayer1 + ' vs ' + movePlayer2 + ' => ' + movePlayer1 + ' wins!'
	    } else if (movePlayer2 === 'ROCK') {
	      return movePlayer1 + ' vs ' + movePlayer2 + ' => tie!'
	    }
	  else {return 'CHOOSE AGAIN'}
	}

}
