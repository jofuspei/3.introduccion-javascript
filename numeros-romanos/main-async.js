'use strict';

const fs = require('fs');
const { checkIsValidRomanNumber, romanToArab } = require('./roman-to-arab');
const { checkIsValidNumber, arabToRoman } = require('./arab-to-roman');

fs.readFile('./numeros-romanos/numbers.json', 'utf-8', (err, data) => {
	if (err) {
		console.error('Error ', err.code);
	} else {
		const numbers = JSON.parse(data);
		numbers.forEach((number) => {
			if (checkIsValidNumber(number)) {
				fs.appendFileSync(
					'./numeros-romanos/converted-async.txt',
					arabToRoman(number) + '\n',
				);
			} else if (checkIsValidRomanNumber(number)) {
				fs.appendFileSync(
					'./numeros-romanos/converted-async.txt',
					romanToArab(number) + '\n',
				);
			} else {
				fs.appendFileSync(
					'./numeros-romanos/converted-async.txt',
					'Not a valid number' + '\n',
				);
			}
		});
	}
});
console.log('Starting data conversion');

// USO DE PROMESAS

// function readFile (filename) {
//   return new Promise((resolve, reject) => {
//     fs.readFile(filename, 'utf-8', (err, data) => {
//       if (err) {
//         reject(err)
//       } else {
//         resolve(data)
//       }
//     })
//   })
// }

// readFile('./numeros-romanos/numbers.txt')
//   .then(data => {
//     data.split('\n').forEach(number => {
//       if (checkIsValidNumber(number)) {
//         fs.appendFileSync('./numeros-romanos/converted-async.txt', arabToRoman(number) + '\n')
//       } else if (checkIsValidRomanNumber(number)) {
//         fs.appendFileSync('./numeros-romanos/converted-async.txt', romanToArab(number) + '\n')
//       } else {
//         fs.appendFileSync('./numeros-romanos/converted-async.txt', 'Not a valid number' + '\n')
//       }
//     })
//   })
//   .catch(error => {
//     console.error('Error ', error.code)
//   })
