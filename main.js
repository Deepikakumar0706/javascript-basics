function checkPalindrome() {
  const stringName = "racecar";
  const revStr = stringName.split("").reverse().join("");
  console.log(revStr);
  for (let i = 0; i < stringName.length; i++) {
    if (revStr[i] === stringName[i]) {
      console.log("The given string is palindrome ");
    } else {
      console.log("The given string is not palindrome");
    }
  }
}

function reverseString() {
  const string = "Hello";
  let strRev = "";
  for (let i = string.length - 1; i >= 0; i--) {
    strRev += string[i];
  }
  console.log(strRev);
}

function evenNumbers() {
  let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  let evenNumbers = numbers.filter((element) => {
    return element % 2 === 0;
  });
  console.log(evenNumbers);
}

function titleCase() {
  const letter = "new delhi is capital of india";
  const words = letter.split(" ");
  console.log(words);
  for (let i = 0; i < words.length; i++) {
    words[i] =
      words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase();
  }
  console.log(words.join(" "));
}

function findFactorial() {
  console.log("5 factorial = " + factorial(5));
  console.log("4 factorial = " + factorial(4));
}

function factorial(num) {
  return num > 1 ? num * factorial(num - 1) : num;
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
function sumsOfAllNumbers() {
  const numArray = [1, 2, 3, 4, 5, 6];
  let sum = 0;
  for (let i = 0; i < numArray.length; i++) {
    sum = sum + numArray[i];
  }
  console.log(sum);
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
  let date1 = "09/12/2024";
  let date2 = "07/12/2024";
  if (date1 === date2) {
    console.log("date are equal");
  } else {
    console.log("date are not equal");
  }
}
