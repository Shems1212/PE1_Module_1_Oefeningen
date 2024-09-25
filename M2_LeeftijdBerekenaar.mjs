// Begin van userInput voorbereiden
import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});
// Einde van userInput voorbereiden


let geboorteJaar = parseFloat(await userInput.question('Wat is je geboorte jaar? '));
let toekomstJaar = parseFloat(await userInput.question('Kies je toekomstjaar: '));

let age = toekomstJaar - geboorteJaar;
let age2 = age-- ;

console.log('In '+ toekomstJaar + ' zal ik '+ age + ' of '+ age2 + ' jaar oud zijn.');
process.exit();
