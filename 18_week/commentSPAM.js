let textarea = document.querySelector('textarea');
let button = document.getElementById("btn");
let resultNode = document.querySelector(".result");
let reg = /XXXX|viagra/gim;
textarea.focus();
document.querySelector('form').addEventListener('submit', (evt) => {
  evt.preventDefault();
  let value = document.querySelector('#name').value;
  localStorage.setItem('username', value);

});
//document.querySelector('form').addEventListener('reset', (evt) => {
// evt.preventDefault();
// readLocalStor();
//})

function readLocalStor() {
  let username = localStorage.getItem('username');
  document.querySelector('#name').value = username;
};
readLocalStor()


function checkSpam() {
  let value = textarea.value;
  let comments = value.replace(reg, "****");
  let result = document.querySelector('#result')
  if (reg.test(value)) {
    result.innerHTML += '<br/>' + comments;
  } else {
    result.innerHTML += '<br/>' + comments;
  }
  localStorage.setItem('coments', result.innerHTML)
  document.querySelector('textarea').value = " "

}
document.querySelector('textarea').value = " "
textarea.focus();
button.addEventListener("click", checkSpam);