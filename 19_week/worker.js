class Worker {
    constructor(name, surname, rate, days, ) {
        this.name = name;
        this.surname = surname;
        this.rate = rate;
        this.days = days;
    }
    getSalary() {
        let salary = this.rate * this.days;
        return salary;
    }
}

let worker1 = new Worker('Иван', 'Иванов', 10, 31)
console.log('Имя:', worker1.name);
console.log('Фамилия:', worker1.surname);
console.log('Оплата:', worker1.rate);
console.log('Рабочих дней:', worker1.days);
console.log('Зарплата:', worker1.getSalary());

let worker2 = new Worker('Петр', 'Петров', 15, 20)
console.log('Имя:', worker2.name);
console.log('Фамилия:', worker2.surname);
console.log('Оплата:', worker2.rate);
console.log('Рабочих дней:', worker2.days);
console.log('Зарплата:', worker2.getSalary());