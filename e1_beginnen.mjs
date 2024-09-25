import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
import { setHeapSnapshotNearHeapLimit } from 'node:v8';
const userInput = readline.createInterface({input, output});

let name = 'Shems'
let age = 21
let favoriteGame = 'Pokemon Platinum'

console.log('Hallo '+ name +', ik hoor dat je '+ age +' jaar oud bent en dat je lievelingsgame '+ favoriteGame +' is.');

