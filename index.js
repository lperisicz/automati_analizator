const asd = require('./FileContentReader')
const test = 'Neki test';

console.log(asd.charArray());

let syntaxAlphabet = 'abcdefghijklmnopqrstuvwxyz#'.toUpperCase().split('');

let allowedSyntaxWords = ['LOAD'];

let syntaxMatrix = [];
let c, r;
for (let i = 0; i < allowedSyntaxWords.length; i++) {
    for (let j = 0; j < syntaxAlphabet.length; j++) {
        if (!syntaxMatrix[i]) {
            syntaxMatrix[i] = {};
        }
        // syntaxMatrix[i]
        // syntaxMatrix[i][`${r}`] = syntaxAlphabet[j];
    }
}
console.log(syntaxMatrix);
let word, lastLetter;
for(let i = 0; i < allowedSyntaxWords.length; i++) {
    word = allowedSyntaxWords[i];
    [...word].forEach(
        c => {
            if (lastLetter) {
                    syntaxMatrix[i][`${lastLetter}`] = c;
            }
            lastLetter = c;
            console.log(lastLetter);
        }

    )
}
console.log(syntaxMatrix);
