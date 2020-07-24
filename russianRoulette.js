const readline = require('readline')
const fs = require('fs')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

let n = 1

let game = {
	welcome: ' This game a <<Russian Roulette>>',
	deadMessage: ' Finita la commedia. ',
	liveMessage: ' You are alive! ',
}

//		-- Russian Roulette --	russianRoulette.js
fs.writeFile('logFile.txt', game.welcome, (err) => {
  if(err){
    throw err
  }
  
  console.log('This game a "Russian Roulette"') // после начала игры будет создан файл logFile.txt с результатом игры
})

	rl.on('line', (cmd) => {	// введите y(начать/продолжить игру) или n(закончить)

		console.log(`Want to finish? Enter 'n' ${cmd}`)

		if (cmd != 'n'){


		while ((Math.random() * 6) < 1) {

			fs.appendFile('logFile.txt', game.deadMessage, (err) => {
				if(err){
					throw err
				}
			
				console.log('Finita la commedia')
			})

			fs.appendFile('logFile.txt', `Rounds played: ${n} `, (err) => {
				if(err){
					throw err
				}
			
				console.log(`Rounds played: ${n}`)
			})


			rl.close()
		} 
		
		n++	//counter round's
		} else {

			fs.appendFile('logFile.txt', game.liveMessage, (err) => {
				if(err){
					throw err
				}
			
				console.log('You are alive!')
			})

			fs.appendFile('logFile.txt', `Rounds played: ${n} `, (err) => {
				if(err){
					throw err
				}
			
				console.log(`Rounds played: ${n}`)
			})


			rl.close()
		}
	})