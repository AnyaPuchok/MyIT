function summation() {
    let a = parseInt(document.getElementById("num1").value);
    let b = parseInt(document.getElementById("num2").value);
    let c = (Number(a) + Number(b));
    var result = document.getElementById("result").innerText = c;
}


function subtraction() {
    let a = parseInt(document.getElementById("num1").value);
    let b = parseInt(document.getElementById("num2").value);
    let c = ((a) - (b));
    var result = document.getElementById("result").innerText = c;}

    function increase() {
        let a = parseInt(document.getElementById("num1").value);
        let b = parseInt(document.getElementById("num2").value);
        let c = ((a) * (b));
        var result = document.getElementById("result").innerText = c;
    }


function divisio() {
    let a = parseInt(document.getElementById("num1").value);
    let b = parseInt(document.getElementById("num2").value);
    let c = ((a) / (b));
    var result = document.getElementById("result").innerText = c;
}