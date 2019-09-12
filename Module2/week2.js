const fs = require('fs')
const validator = require('validator')
const ellipsis = require('text-ellipsis')

var today = new Date();
var date = (today.getMonth()+1)+'-'+today.getDate()+'-'+today.getFullYear();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
var dateTime = time + ' ' + date;

var log = dateTime + ' Today is September 12th.\n';
var log2 = dateTime + ' Yesterday was September 11th.\n';
var log3 = dateTime + ' Tomorrow is September 13th.\n';
var log4 = dateTime + ' What is E = mc^2?\n';
var log5 = dateTime + ' The speed of light is 3 * e^8 miles per second.\n';
var log6 = dateTime + ' The speed of sound is one-fifth of that.\n';
var log7 = dateTime + ' I hope you had fun!\n';
var bet = validator.isAlpha('qwerty');
var symbol = validator.isAscii('[]()\n');
var fitEnd = ellipsis('A fitting description for this package.', 14, { ellipsis: ' end.' });

fs.writeFileSync('log.txt', log + log + log + log2 + log2 + log2 + log3 + log3 + log3 + log4 + log4 + log4 + log5 + log5 + log5 + log6 + log6 + log6 + log7 + log7 + log7 + bet + ' ' + symbol + '\n' + fitEnd);
