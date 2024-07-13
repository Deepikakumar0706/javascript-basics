function checkPalindrome() {
  console.log("Is palindrome - " + validatePalindrome("ratr"));
  console.log("Is palindrome - " + validatePalindrome("malayalam"));
  console.log("Is palindrome - " + validatePalindrome("abcd"));
  console.log("Is palindrome - " + validatePalindrome("ab c d dff dd"));
  console.log("Is palindrome - " + validatePalindrome("Malayalam"));
}

function validatePalindrome(inputString) {
  // return (
  //   inputString.trim().toLowerCase() ===
  //   inputString.trim().toLowerCase().split("").reverse().join("")
  // );
  const updatedInput = inputString.trim().toLowerCase();
  const reversedInput = updatedInput
    .trim()
    .toLowerCase()
    .split("")
    .reverse()
    .join("");

  for (let i = 0; i < updatedInput.length; i++) {
    if (reversedInput[i] !== updatedInput[i]) {
      return false;
    }
  }
  return true;
}

function reverseString() {
  console.log(reverseInputString("Hello"));
  console.log(reverseInputString("Hello Test"));
}

function reverseInputString(inputString) {
  let reverseOutput = "";
  for (let count = inputString.length - 1; count >= 0; count--) {
    reverseOutput += inputString[count];
  }
  return convertToTitleCase(reverseOutput);
}

function convertToTitleCase(input) {
  return input
    .split(" ")
    .map((w) => w[0].toUpperCase() + w.substring(1).toLowerCase())
    .join(" ");
}

function evenNumbers() {
  let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  let evenNumbers = numbers.filter((element) => {
    return element % 2 === 0;
  });
  console.log(evenNumbers);
}

function titleCase() {
  const inputToBeValidated = "new delhi is capital of india";
  // const words = letter.split(" ");
  // for (let i = 0; i < words.length; i++) {
  //   words[i] =
  //     words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase();
  // }
  //  console.log(words.join(" "));
  console.log(convertToTitleCase(inputToBeValidated));
}

function findFactorial() {
  console.log("5 factorial = " + factorial(5));
  console.log("4 factorial = " + factorial(4));
}

function factorial(num) {
  return num > 1 ? num * factorial(num - 1) : num;
}

function isPrime(input) {
  for (count = 2; count < input / 2; count++) {
    if (input % count === 0) {
      return false;
    }
  }
  return true;
}

function validatePrimeNo() {
  console.log(isPrime(6));
  console.log(isPrime(7));
  console.log(isPrime(333333));
}

const outputArray = [];
function flatArray() {
  const sampleArray = [1, 2, [2, 3, 6, [4, 5, [5, 5, 6, 6, 6]]]];

  flattenInnerArray(sampleArray);
  console.log(outputArray);
}

function flattenInnerArray(innerArray) {
  for (let count = 0; count < innerArray.length; count++) {
    if (typeof innerArray[count] === "number") {
      outputArray.push(innerArray[count]);
    } else {
      flattenInnerArray(innerArray[count]);
    }
  }
}

//2nd set sums
function sumsOfAllNumbers(numberArray) {
  let sum = 0;
  for (let i = 0; i < numberArray.length; i++) {
    if (typeof numberArray[i] === "number") {
      sum = sum + numberArray[i];
    }
  }
  return sum;
}

function printSum() {
  console.log(sumsOfAllNumbers([1, 2, 3, 4, 5, 6]));
  console.log(sumsOfAllNumbers([1, 2, "g", "h", 5, 6]));
}

function reversedString() {
  const word = "I am traveling to my native";
  const wordString = word.split(" ").reverse().join(" ");
  console.log(wordString);
}

function findMaxNum() {
  const number = [9, 10, 99, 45, 92, 56];
  const maxNumber = Math.max(...number);
  console.log(maxNumber);
}

function sumAllValues() {
  const obj = { a: 1, b: 2, c: 3 };
  let sums = 0;
  for (x in obj) {
    sums = sums + obj[x];
  }
  console.log(sums);
}

function removeDuplicates() {
  let array = [1, 2, 2, 3, 4, 55, 6, 6, 7, 7, 7, 55, 8];
  let uniqueArray = [];
  for (let i = 0; i < array.length; i++) {
    if (uniqueArray.indexOf(array[i]) === -1) {
      uniqueArray.push(array[i]);
    }
  }
  console.log(uniqueArray);
}

function checkDate() {
  //  console.log(compareDate("09/12/2024", "09/12/2024"));
  console.log(compareDate("2015-03-25", "03/25/2015"));
}

function compareDate(date1, date2) {
  const dateOne = new Date(date1);
  const dateTwo = new Date(date2);
  return dateOne.getDate() === dateTwo.getDate() &&
    dateOne.getDay() === dateTwo.getDay() &&
    dateOne.getFullYear() === dateTwo.getFullYear()
    ? "Dates are equal"
    : "Dates are not equal";
}
