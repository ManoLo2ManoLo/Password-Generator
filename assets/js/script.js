const submitBtn = document.querySelector('#submitBtn');

const length = document.querySelector('#length').value;
const lowercase = document.querySelector('#lowercase');
const uppercase = document.querySelector('#uppercase');
const numeric = document.querySelector('#numeric');
const special = document.querySelector('#special')

function passwordGenerator() {
  console.log(length)
  let characterList = '';

  if (lowercase.checked) {
    characterList += "abcdefghijklmnopqrstuvwxyz";
  }

  if (uppercase.checked) {
    characterList += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }

  if (numeric.checked) {
    characterList += "1234567890";
  }

  if (special.checked) {
    characterList += "+=!@#$%^&*()?<>";
  }
  for (let i = 0; i < length; i++) {
    do {
    randomPassword += characterList[Math.floor(Math.random() * characterList.length)];
    } while (randomPassword === 0)
  }
}

submitBtn.addEventListener('click', passwordGenerator);