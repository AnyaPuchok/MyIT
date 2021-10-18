let input1 = document.getElementById("num1");
let input2 = document.getElementById("num2");
let resalt = document.getElementById("result");
class Calculator {
    static sum(a, b) {
        return Number(a) + Number(b);
    }
    static minus(a, b) {
        return a - b;
    }
    static multiplic(a, b) {
        return a * b;
    }
    static divisio(a, b) {
        return a / b;
    }
}

document.getElementById("btn1").addEventListener('click', () => {
    let a = input1.value;
    let b = input2.value;
    let sum = Calculator.sum(a, b);
    resalt.innerText = sum;

});

document.getElementById("btn2").addEventListener('click', () => {
    let a = input1.value;
    let b = input2.value;
    let minus = Calculator.minus(a, b);
    resalt.innerText = minus;
});

document.getElementById("btn3").addEventListener('click', () => {
    let a = input1.value;
    let b = input2.value;
    let multiplic = Calculator.multiplic(a, b);
    resalt.innerText = multiplic;
});

document.getElementById("btn4").addEventListener('click', () => {
    let a = input1.value;
    let b = input2.value;
    let divisio = Calculator.divisio(a, b);
    resalt.innerText = divisio;
    if (divisio == `Infinity`) {
        resalt.innerText = ("На ноль делить нельзя")
    }
});