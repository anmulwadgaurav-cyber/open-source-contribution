document.addEventListener("DOMContentLoaded", () => {
  const passwordLengthInput = document.getElementById("pass-len");
  const generatePasswordBtn = document.getElementById("gen-pass");
  const generateRandomPasswordBtn = document.getElementById("gen-rand-pass");
  const generatedOutput = document.getElementById("generated");
  const resetBtn = document.getElementById("reset");

  let string =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%&(){}[]";
  let splited = string.split("");
  let randomPass = [];

  function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function reset() {
    passwordLengthInput.value = "";
    generatedOutput.innerHTML = `
    <p id="password" style="color: gray;">Password will generate here</p>
    `;
  }

  function randomPassword() {
    randomPass.length = 0;
    passwordLengthInput.value = getRandom(5, 10);
    inputPassword();
  }

  function inputPassword() {
    randomPass.length = 0;
    if (passwordLengthInput.value == "" || passwordLengthInput.value <= 0) {
      generatedOutput.innerHTML = `
          <p id="empty">Enter length</p>
          `;
    } else {
      let numberInput = parseInt(passwordLengthInput.value);

      for (let i = 0; i < numberInput; i++) {
        let randomIndex = getRandom(0, splited.length - 1); // 7
        let randomCharacter = splited[randomIndex]; // f

        randomPass.push(randomCharacter);
      }
      let finalPass = randomPass.join("");

      generatedOutput.innerHTML = `
      <p id="password">${finalPass}</p>
      `;
    }
  }

  generatePasswordBtn.addEventListener("click", inputPassword);
  generateRandomPasswordBtn.addEventListener("click", randomPassword);
  resetBtn.addEventListener("click", reset);
});
