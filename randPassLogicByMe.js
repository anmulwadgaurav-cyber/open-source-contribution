let string =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*(){}[]";
let splited = string.split("");

let randomPass = [];

// let passLength = Number(prompt("Enter Password Length"));
let passLength = 15;

function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

for (let i = 0; i < passLength; i++) {
  let randomIndex = getRandom(0, splited.length - 1); // 7
  let randomCharacter = splited[randomIndex]; // f

  randomPass.push(randomCharacter);
}

console.log(randomPass.join(""));
