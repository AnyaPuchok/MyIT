let form = document.querySelector(`#form`);

createCat.onclick = function (event) {
    event.preventDefault();
    fetch("https://httpbin.org/post", {
            method: 'POST',
            body: new FormData(form),
        })

        .then(response => response.json())
        .then(form => {
            console.log(form);
        })
        .catch(error => console.log(error));
};