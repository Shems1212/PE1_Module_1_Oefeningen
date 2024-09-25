// Begin van userInput voorbereiden
import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});
// Einde van userInput voorbereiden

let uren = parseFloat(await userInput.question('Aantal uren: '));
let min = parseFloat(await userInput.question('Aantal minuten: '));
let sec = parseFloat(await userInput.question('Aantal seconden: '));

let TotalSec = sec + (min * 60) + (uren * (60 ** 2 ));

console.log('Totaal aantal seconden: ' + TotalSec);
process.exit();