const pokemon = require('pokemon');
const random = require('random-number-generator');
console.log('Here is something for you!');
var fortunes = [
    'Your fortune will be sent to you in 48 hours!',
    'Your fortune will never deliver!',
    'After taxes you make a lot of money!',
    'Some pokemon characters are scary!',
    'Run away from your pokemon character!'
];
console.log('You will receive $'+random(10000000)+' from a person of your choice');
console.log('This is not a joke. Okay, it may be a joke if you believe it is.');
console.log('0.5-0.8-1.2-0.4, 0.8-2.2 0.8-2.1 0 0.9-');
console.log('Hint! 0 = a, - connects letters to form a word, 0.1 = b');
var hugeFortune = random(fortunes.length-1);
console.log(fortunes[hugeFortune]);
var pokemonname = pokemon.random();
console.log(pokemonname+' will or will not deliver your fortune');
