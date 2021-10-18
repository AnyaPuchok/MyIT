'use strict';

class Cat {
    constructor(nickname, ownersname, telephone, date, breed, food, gender) {
        this.name = nickname;
        this.ownersname = ownersname;
        this.telephone = telephone;
        this.DateOfBirth = date;
        this.breed = breed;
        this.food = food;
        this.gender = gender;
        this.comments = comments;
    }
}

document.querySelector('form').addEventListener('submit', (evt) => {
    evt.preventDefault();

    let nickname = document.querySelector('#nickname').value;
    let ownersname = document.querySelector('#ownersname').value;
    let telephone = document.querySelector('#tel').value;
    let date = document.querySelector('#date').value;
    let breed = document.querySelector('#breed').value;

    let food = [];
    let feed = document.querySelectorAll('input[type="checkbox"]:checked'); 
    for (let i = 0; i < feed.length; i++) {
        food.push(feed[i].value)
    }

    let gender = document.querySelector('input[name="gender"]:checked')?.value; 
    let comments = document.querySelector('#comments').value;

    //console.log(nickname, ownersname, telephone, date, breed, gender)

    let cat = new Cat(nickname, ownersname, telephone, date, breed, food, gender);
    console.log('Кличка:', cat.name);
    console.log('Имя хозяина:', cat.ownersname);
    console.log('Телефон для связи:', cat.telephone);
    console.log('Дата рождения:', cat.DateOfBirth);
    console.log('Порода:', cat.breed);
    console.log('Питание:', cat.food);
    console.log('Пол:', cat.gender);
    console.log('Комментарии:', comments);
})