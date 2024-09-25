// Begin van userInput voorbereiden
import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});
// Einde van userInput voorbereiden


let val = parseFloat (await userInput.question('First number: '));
val +=parseFloat (await userInput.question('Second number: '));

console.log(val)

process.exit();
