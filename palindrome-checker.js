
function palindrome(str) {
  let cleanStr = str.replace(/[^0-9a-z]/gi, "").toLowerCase();
  let reversedStr = cleanStr.split("").reverse().join("");
  return cleanStr === reversedStr;
}

palindrome("racecar"); // true
palindrome("RaceCar"); // true
palindrome("race CAR"); // true
palindrome("2A3*3a2"); // true
palindrome("2A3 3a2"); // true
palindrome("2_A3*3#A2"); // true
palindrome("eye");