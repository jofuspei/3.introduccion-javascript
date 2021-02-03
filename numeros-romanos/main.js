'use strict';

const fs = require('fs');
const { checkIsValidRomanNumber, romanToArab } = require('./roman-to-arab');
const { checkIsValidNumber, arabToRoman } = require('./arab-to-roman');

const data = fs.readFileSync('./numeros-romanos/numbers.json', 'utf8');
const numbers = JSON.parse(data);
numbers.forEach((number) => {
	if (checkIsValidNumber(number)) {
		fs.appendFileSync(
			'./numeros-romanos/converted.txt',
			arabToRoman(number) + '\n',
		);
	} else if (checkIsValidRomanNumber(number)) {
		fs.appendFileSync(
			'./numeros-romanos/converted.txt',
			romanToArab(number) + '\n',
		);
	} else {
		fs.appendFileSync(
			'./numeros-romanos/converted.txt',
			'Not a valid number' + '\n',
		);
	}
});

console.log('Conversion process completed');
