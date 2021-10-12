let textarea = document.querySelector('textarea');
document.querySelector('form').addEventListener('submit', (evt) => {
  evt.preventDefault();
  let value = document.querySelector('#name').value;
  localStorage.setItem('username', value);
  let comment = document.querySelector('textarea').value;
  document.querySelector('#result').innerHTML += '<br/>' + value + ':' + '<br/>' + comment;
  textarea.value = " "
  textarea.focus();

  localStorage.setItem('coments', document.querySelector('#result').innerHTML)
});

//document.querySelector('form').addEventListener('reset', (evt) => {
// evt.preventDefault();
// readLocalStor();
//})


function readLocalStor() {
  let username = localStorage.getItem('username');
  document.querySelector('#name').value = username;
}
readLocalStor()