//============================ Задача о палиндроме ============================//
//============================ Задача о палиндроме ============================//

const palindrome = document.querySelector(".palindrome__inner-text")

const isPalindromeOne = (str) => {
  str = str.replace("/s/g", "").toLowerCase();

  return str === str.split("").reverse().join("");
};

let namePalindrome = "Аргентина манит негра";
let result = isPalindromeOne(namePalindrome);

if (result) {
  palindrome.innerText = namePalindrome + " является палиндромом"
  palindrome.style.color = "green"
  console.log(`Строка '%c${namePalindrome}%c' является палиндромом`, "color: green", "color: black");
} else {
  palindrome.innerText = namePalindrome + " не является палиндромом"
  palindrome.style.color = "red"
  console.log(`Строка '%c${namePalindrome}%c' не является палиндромом`,  "color: red", "color: black");
}

