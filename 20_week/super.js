let heroes = [{
        name: 'Железный человек',
        universe: 'Marvel Comics',
        alterEgo: 'Тони Старк',
        typeОfActivity: 'гений, миллиардер, плейбой, филантроп',
        friends: 'Мстители',
        superpowers: 'высокий уровень интеллекта, широкие познания науки и техники, связь со всемирной паутиной, бронекостюмы',
        rating: 0,
        picture: "https://n1s1.hsmedia.ru/7b/56/08/7b5608ec3df83d872fa1162fb9e32f28/547x397_0xac120002_1773711401540468871.jpg"
    },
    {
        name: 'Капитан Америка',
        universe: 'Marvel Comics',
        alterEgo: 'Стивен Роджерс',
        typeОfActivity: 'супер-солдат',
        friends: 'Мстители',
        superpowers: 'сила, выносливость, бессмертие, быстрая регенерация, мастерство скрытности и боя',
        rating: 0,
        picture: "https://n1s1.hsmedia.ru/41/8f/05/418f050c767eeca8854b328914c7bccc/547x397_0xac120002_20106541761540468871.jpg"
    },
    {
        name: 'Тор',
        universe: 'Marvel Comics',
        alterEgo: 'нет; полное имя — Тор Одинсон',
        typeОfActivity: 'борец за справедливость, скандинавский бог',
        friends: 'Мстители',
        superpowers: 'все, что может бог, плюс молот Мьелнир',
        rating: 0,
        picture: "https://n1s1.hsmedia.ru/52/a3/e1/52a3e14a0c8f02715b763e7a20fe1c00/547x397_0xac120002_19311926741540468872.jpg"
    },
    {
        name: 'Халк',
        universe: 'Marvel Comics',
        alterEgo: 'Брюс Беннер',
        typeОfActivity: 'супергерой, борец за справедливость, ученый-биохимик',
        friends: 'Мстители',
        superpowers: 'сверхчеловеческая сила искорость, выносливость, полет',
        rating: 0,
        picture: src = "https://n1s1.hsmedia.ru/9a/28/e7/9a28e7b059594fc10387669ae4bd2f22/547x397_0xac120002_20162335021540468872.jpg"
    } ];


    getLocalStorage();

let result = '';


for (let heroe of heroes){
    result = result +
        '<div class = "name">' + heroe.name + ' </div>' +
        '<div class = "universe"> Вселенная: ' + heroe.universe + ' </div>' +
        '<div class = "alterEgo"> Альтер эго: ' + heroe.alterEgo + ' </div>' +
        '<div class = "typeОfActivity"> Род деятельности: ' + heroe.typeОfActivity + ' </div>' +
        '<div class = "friends"> Друзья: ' + heroe.friends + ' </div>' +
        '<div class = "superpowers"> Суперсилы: ' + heroe.superpowers + ' </div>' +
        '<div class = "rating"> Рейтинг супер героя ' + ' </div>' +
        '1 <input class = "range" type = "range" min="0" max="10" step="1" value = ' + heroe.rating + '> 10' + '<br>' +
        '<img class = "img" src = "'+ heroe.picture +'" >';
};

document.querySelector('.container').innerHTML = result;


let inputs = document.querySelectorAll('input');
inputs.forEach((range, index) => {
    range.addEventListener('change', () => {
        let rating = range.value;
        heroes[index].rating = rating;
        setLocalStorage();
    })
});

function getLocalStorage() {
  let newHeroes = JSON.parse(localStorage.getItem('heroes'));
    heroes = newHeroes;
};
 // код работает, но если есть запись в localStorage
 // почему так не понимаю. 
//function getLocalStorage() {
 //  let newHeroes = JSON.parse(localStorage.getItem('heroes'));
  //  if(!newHeroes){
  //       heroes = newHeroes;
 //}
//};

function setLocalStorage() {
    localStorage.setItem('heroes',JSON.stringify(heroes));
};
