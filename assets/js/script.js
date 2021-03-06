const submitBtn = document.querySelector('#submitBtn');

const lengthEl = document.querySelector('#lengthEl');
const lowercase = document.querySelector('#lowercase');
const uppercase = document.querySelector('#uppercase');
const numeric = document.querySelector('#numeric');
const special = document.querySelector('#special')
const passwordEl = document.querySelector('#passwordEl');
const errorEl = document.querySelector('#errorEl');

function passwordGenerator() {
  let length = lengthEl.value;
  let characterList = '';
  let password = [];

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

  if (characterList == 0) {
    errorEl.innerHTML = 'Please select a password requirement.'
  } else {
    if (!length || length < 8 || length > 128) {
      errorEl.innerHTML = 'Password must be 8 to 128 characters.'
    } else {
      errorEl.innerHTML = '';

      for (let i = 0; i < length; i++) {
        do {
          password += characterList[Math.floor(Math.random() * characterList.length)];
        } while (password === 0)
      }
  
      passwordEl.innerHTML = password;
    }
  }
}

function copyText() {
  let copyLength = passwordEl.value

  if (copyLength.length > 1) {
    passwordEl.select();
    passwordEl.setSelectionRange(0, 99999); /* For mobile devices */

    navigator.clipboard.writeText(passwordEl.value);

    window.alert('Copied');
  }
}

submitBtn.addEventListener('click', passwordGenerator);