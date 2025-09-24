const key = 1;

const primaryWordElement = document.querySelector(".primaryWord");
const encryptedElement = document.querySelector(".encrypterElement");

const wordToDecript = document.querySelector(".decryptWord");
const decryptedElement = document.querySelector(".decryptedElement");

primaryWordElement.addEventListener("input", (event) => {
  const primaryInputWord = event.target.value;
  const lastnameArray = primaryInputWord.split("");

  const encryptedLastnameArray = lastnameArray.map((letter) => {
    const code = letter.charCodeAt(0);
    let charcode = code + key;

    if (charcode > 122) {
      charcode = 97 + (charcode - 123);
    }

    return String.fromCharCode(charcode);
  });

  const encryptedLastname = encryptedLastnameArray.join("");
  encryptedElement.textContent = encryptedLastname;
});

wordToDecript.addEventListener("input", (event) => {
  const encryptInputWord = event.target.value;
  const encryptArray = encryptInputWord.split("");

  const decryptedArray = encryptArray.map((letter) => {
    const code = letter.charCodeAt(0);
    let charCode = code - key;

    if (charCode < 96) {
      charCode = 122 - (96 - charCode);
    }

    return String.fromCharCode(charCode);
  });
  const decryptedLastname = decryptedArray.join("");
  decryptedElement.textContent = decryptedLastname;
});
