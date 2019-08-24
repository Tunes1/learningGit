let button = document.querySelector(".randomWordButton");
let alphabet = "abcdefghijklmnopqrstuvwxyz";
let wordList = document.querySelector("#generatedWordsList");
let splittedAlphabet = alphabet.split("");
button.addEventListener("click", event => {
  let arrayWordGenerated = [];
  let wordListItem = document.createElement("li");
  for (let i = 0; i < 10; i++) {
    let randomNumber = Math.floor(Math.random() * 25);
    let randomLetter = splittedAlphabet[randomNumber];
    arrayWordGenerated.push(randomLetter);
  }
  let wordGenerated = arrayWordGenerated.join("");
  wordListItem.innerHTML = wordGenerated;
  wordList.appendChild(wordListItem);
});
// Testando o meu segundo commit!