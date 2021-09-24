function summation() {
    let a = parseInt(document.getElementById("num1").value);
    let b = parseInt(document.getElementById("num2").value);
    let c = (a + b);
    document.getElementById("result").innerText = c;
}


function subtraction() {
    let a = parseInt(document.getElementById("num1").value);
    let b = parseInt(document.getElementById("num2").value);
    let c = (a - b);
    document.getElementById("result").innerText = c;
}

function increase() {
    let a = parseInt(document.getElementById("num1").value);
    let b = parseInt(document.getElementById("num2").value);
    let c = (a * b);
    document.getElementById("result").innerText = c;
}


function divisio() {
    let a = parseInt(document.getElementById("num1").value);
    let b = parseInt(document.getElementById("num2").value);
    let c = (a / b);
    document.getElementById("result").innerText = c;
    if (c == `Infinity`) {
        document.getElementById("result").innerText = ("На ноль делить нельзя")
    } else {
        document.getElementById("result").innerText = c;
    }
}