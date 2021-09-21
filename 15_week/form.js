function check() {
    let name = document.getElementById("name");
    let name1 = (document.getElementById("name").value);
    let email = document.getElementById("email");
    let password = document.getElementById("password");
    let password_again = document.getElementById("password_again");
    let username = document.getElementById("username");

    document.getElementById("errorMessage")
        .innerHTML = "";
    document.getElementById("message")
        .innerHTML = "";

    if (name.value == "") {
        document.getElementById("errorMessage")
            .innerHTML += "Ваше имя незаполнено</br>";
    }
   
    if (email.value == "") {
        document.getElementById('errorMessage')
            .innerHTML += "Ваш email незаполнен</br>";
    }
    if (username.value == "") {
        document.getElementById("errorMessage")
            .innerHTML += "Имя пользователя незаполнено</br>";
    }

    if (password.value == "") {
        document.getElementById('errorMessage')
            .innerHTML += "Ваш пароль незаполнен</br>";
    }

    if (password.value.length <= 5) {
        document.getElementById('errorMessage')
            .innerHTML += "Ваш пароль слишком короткий</br>";
    }

    if (password_again.value !== password.value) {
        document.getElementById('errorMessage')
            .innerHTML += "Ваш пароль не совпадает</br>";
    }

    if (errorMessage.innerHTML == "") {
        document.getElementById('message')
        .innerHTML += `Добро пожаловать, ${name1}`;
    }

}