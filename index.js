const wordsProvider = require('./FileContentReader')
const test = 'Neki test';

let testWords = wordsProvider.charArray();

let syntaxAlphabet = 'abcdefghijklmnopqrstuvwxyz#'.toUpperCase().split('');

let allowedSyntaxWords = ['LOAD', 'ADD', 'SUB', 'DIV', 'BEGIN', 'END', 'R0', 'R1',
    'R2', 'R3', 'R4', 'R5', 'R6', 'R7', 'R8', 'R9'];

let syntaxMatrix = [];
for (let i = 0; i < allowedSyntaxWords.length; i++) {
    if (!syntaxMatrix[i]) {
        syntaxMatrix[i] = {};
    }
}
console.log(syntaxMatrix);
let word, lastLetter;
for (let i = 0; i < allowedSyntaxWords.length; i++) {
    word = allowedSyntaxWords[i];
    lastLetter = '';
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
let generatedSyntaxMatrix = [];
for (let i = 0; i < testWords.length; i++) {
    if (!generatedSyntaxMatrix[i]) {
        generatedSyntaxMatrix[i] = {};
    }
}
for (let i = 0; i < testWords.length; i++) {
    let word = testWords[i], lastLetter = '';
    [...word].forEach(
        c => {
            if (lastLetter) {
                generatedSyntaxMatrix[i][`${lastLetter}`] = c;
            }
            lastLetter = c;
            console.log(lastLetter);
        }
    )
}
console.log(generatedSyntaxMatrix);

let counter = 0;
generatedSyntaxMatrix.forEach(
    genWord => {
        syntaxMatrix.forEach(
            syntaxWord => {
                if(JSON.stringify(syntaxWord) === JSON.stringify(genWord)) {
                    counter ++;
                }
            }
        );
    }
);

console.log(`UKUPNO: ${testWords.length}, VALIDNO: ${counter}`);
