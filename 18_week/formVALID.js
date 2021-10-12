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
}

function checkAll() {
    errors = [] 
    let name = document.getElementById("name");
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
    }


}