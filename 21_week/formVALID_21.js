let errors = [];


function checkValidity(input) {
    let validity = input.validity;
    if (validity.valueMissing) {
        errors.push('Поле' + input.placeholder + ' не заполнено');
    }
    if (validity.patternMismatch) {
        errors.push('Неверный формат заполнения поля' + input.placeholder);
    }
    if (validity.tooLong) {
        let maxlength = input.getAttribute('maxlength');
        errors.push('Максимальное значение не может быть больше чем' + maxlength);
    }
    if (validity.tooShort) {
        let minlength = input.getAttribute('minlength');
        errors.push('Минимальное значение не может быть меньше чем' + minlength);
    }
};


createAccount.onclick = (event) => {
    event.preventDefault();
    errors = []
    let name1 = (document.getElementById("name").value);
    let errorMessage = document.getElementById("errorMessage");

    let inputs = document.querySelectorAll("input");

    for (let input of inputs) {
        checkValidity(input);
    }
    errorMessage.innerHTML = errors.join(', <br>');

    document.getElementById("message")
        .innerHTML = "";

    if (password_again.value !== password.value) {
        errorMessage.innerHTML += "</br>Ваш пароль не совпадает</br>";
    }
    if (errorMessage.innerHTML == "") {
        document.getElementById('message')
            .innerHTML += `Добро пожаловать, ${name1}`;
            
        let user = {
            name: document.getElementById("name").value,
            emeil: document.getElementById("email").value,
            telephone: document.getElementById("telephone").value,
            username: document.getElementById("username").value,
            password: document.getElementById("password").value
        }
        fetch("https://httpbin.org/post", {
                method: 'POST',
                body: JSON.stringify(user),
                headers: {
                    'Content-Type': 'application/json; charset=utf-8'
                },
            })
            .then(response => response.json())
            .then(user => {
                console.log(user);
            })
            .catch(error => console.log(error));
    }
};
