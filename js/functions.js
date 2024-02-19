// 1) --- проверяем длину строки на предельно допустимую

const checkLength = (string, maxLength) => string.length <= maxLength;

// console.log(checkLength("Chocolate", 10));
// console.log(checkLength("Abrakadabra", 10));

// 2) --- Palindrome

const checkPalindrome = (string) => {
  string = string.toLowerCase().replaceAll(' ', '');
  let reverseString = '';
  for (let i = string.length - 1; i >= 0; i--) {
    reverseString += string[i];
  }
  return string === reverseString;
};

const checkPalindrome1 = (string) =>
  string.toLowerCase().replaceAll(' ', '').split('').reverse().join('') ===
  string;

//1 - проверка результата (через цикл)
// console.log(checkPalindrome('Т о п о Р '))
// console.log(checkPalindrome('топот'))

//2 - проверка результата (через массив)
// console.log(checkPalindrome1('Т о п о Р '))
// console.log(checkPalindrome1('топот'))

// 3) --- проверяем числовые вхождения в строке / числе - возвращаем целое положительное число

const getNumbers = (string) => {
  if (typeof string === 'number') {
    string = String(string);
  }

  let result = '';
  string = string.replaceAll(/ /g, ''); //если replaceAll(' ', '') то ругается среда node.js. Среде браузера и тот и тот вариант ОК.
  for (let value of string) {
    value = +value;
    !Number.isNaN(value) ? (result += value) : result;
  }
  return +result;
};

// console.log(getNumbers("1 кефир, 0.5 батона"));
// console.log(getNumbers(-1.5));
