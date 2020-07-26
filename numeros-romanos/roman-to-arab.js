const romanNumMap = {
  M: 1000,
  D: 500,
  C: 100,
  L: 50,
  X: 10,
  V: 5,
  I: 1
}

const checkIsValidRomanNumber = (romanNum) => (/^M{0,3}(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})$/).test(romanNum)

function romanToArab (stringNum) {
  let number = romanNumMap[stringNum[stringNum.length - 1]]

  for (let i = stringNum.length - 2; i >= 0; i--) {
    if (romanNumMap[stringNum[i]] >= romanNumMap[stringNum[i + 1]]) {
      number += romanNumMap[stringNum[i]]
    } else {
      number -= romanNumMap[stringNum[i]]
    }
  }

  return number
}

exports.checkIsValidRomanNumber = checkIsValidRomanNumber
exports.romanToArab = romanToArab
