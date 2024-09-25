// Begin van userInput voorbereiden
import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});
// Einde van userInput voorbereiden


let val1 = 33;
let val2 = 14;

let som = val1 + val2;
let verschil = val1 - val2;
let verm = val1 * val2;
let deling= val1 / val2;


console.log('Getal 1: ' + val1 + ' en getal 2 : ' +val2 + '\nSom : ' + som + '\nVerschil : ' + verschil + '\nVermenigvuldiging : ' + verm + '\nDeling : ' + deling);

