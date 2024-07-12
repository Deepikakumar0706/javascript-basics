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
