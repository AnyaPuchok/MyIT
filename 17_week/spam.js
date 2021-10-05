let input = document.querySelector("input");
let button = document.querySelector("button");
let resultNode = document.querySelector(".result");
let reg = /XXXX|viagra/gim;



function checkSpam() {
  let value = input.value;

  if (reg.test(value)) {
    let result = value.replace(reg, "****");
    resultNode.textContent = result;
  } else {
    resultNode.textContent = "Пройдена!";
  }
}

button.addEventListener("click", checkSpam);
