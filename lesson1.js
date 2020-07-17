const chalk = require('chalk')

console.log(chalk.black.bgWhite('Lesson 1 '))

let Tc = 36 // Температура по Цельсию
let Tf = (9 / 5) * Tc + 32 // Формула для перевода в Фаренгейт
console.log(chalk.black.bgCyan('Температура по Цельсию: ', chalk.white.bold('+' + Tc) + ' °C '))
console.log(chalk.black.bgCyan('Температура по Фаренгейту: ', chalk.white.bold('+' + Tf) + ' °F '))

let author = 'Анастасия Литвинова'
console.log(chalk.hex('#A6E22D').bold.italic(author))

console.log(chalk.white.bgHex('#1E1E80').underline(chalk.bgHex('#1E7324')(1000), ('108 ')))