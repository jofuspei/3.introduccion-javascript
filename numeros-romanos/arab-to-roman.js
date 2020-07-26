const numMap = {
  1000: 'M',
  500: 'D',
  100: 'C',
  50: 'L',
  10: 'X',
  5: 'V',
  1: 'I'
}

const checkIsValidNumber = (num) => (num >= 1 && num <= 3999)

function arabToRoman (num) {
  const digits = num.toString().split('')
  let divisor = 10 ** (num.toString().length - 1)

  let romanNumber = ''

  digits.forEach(element => {
    const el = Number(element)

    if (el <= 3) {
      romanNumber += numMap[divisor].repeat(el)
    } else if (el === 4) {
      romanNumber += (numMap[divisor] + numMap[divisor * 5])
    } else if (el >= 5 && el <= 8) {
      romanNumber += (numMap[divisor * 5] + numMap[divisor].repeat(el - 5))
    } else if (el === 9) {
      romanNumber += numMap[divisor] + numMap[divisor * 10]
    }

    divisor /= 10
  })

  return romanNumber
}

exports.checkIsValidNumber = checkIsValidNumber
exports.arabToRoman = arabToRoman
