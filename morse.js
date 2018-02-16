const morse = require('morse');
const prompt = require('prompt');
prompt.start();
prompt.get(['personality', 'email'], function (err, result) {
    console.log('Command-line input received:');
    console.log('  personality type: ' + morse.encode(result.personality));
    console.log('  email: ' + morse.encode( result.email));
});
var encoded = morse.encode('const morse');
console.log(encoded);