
function getSum() {
    let arr = [];
    let mark = Number(document.getElementById("mark").value);
    let volume = Number(document.getElementById("volume").value);
    let radio = getCheckedRadio();
    document.getElementById("result1")
        .innerText= "";
    if ( mark === 0 || isNaN(volume)  || radio === -1)
        document.getElementById("result").innerText = ("Необходимо выбрать все параметры автомобиля");
        else {
        arr.push(mark, volume, radio);
        document.getElementById("result1").innerText = (`Стоимость автомобиля ${arraySum(arr)} рублей!`);
        document.getElementById("result")
        .innerText= "";
    }
}

document.getElementById("result1").innerText = "";
let select = document.getElementById('mark');
select.addEventListener('change', function () {
    const value = document.getElementById('mark').value;
    const Ford = ['Mondeo', 'Focus', 'Explorer'];
    const Honda = ['Accord', 'Civic', 'Jazz'];
    const Mitsubishi = ['Outlander', 'Pajero', 'Lancer'];
    let values = [];
    document.getElementById("container").innerHTML = ''

    if (value == 0) {
        return
    } else if (value == 100000) {
        values = [...Ford]
    } else if (value == 200000) {
        values = [...Honda]
    } else if (value == 300000) {
        values = [...Mitsubishi]
    }

    let select = document.createElement("select");
    select.name = "avto";
    select.id = "avto";
   

    for (const val of values) {
        let option = document.createElement("option");
        option.value = val;
        option.text = val.charAt(0).toUpperCase() + val.slice(1);
        select.append(option);
    }

    document.getElementById("container").append(select);
});


function arraySum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
    }
    return (sum)
}

function searchChecked(nameOfGroup) {
    let checked_array = [];
    for (let i = 0; i < nameOfGroup.length; i++) {
        if (nameOfGroup[i].checked) {
            checked_array.push(Number(nameOfGroup[i].value));
        }
    }
    let sum = arraySum(checked_array);
    return sum;
}

function getCheckedRadio() {
    checkRadio = document.getElementsByName('radio');
    sum = searchChecked(checkRadio);
    if (sum === 0)
        return -1;
    return sum;
}

let button = document.getElementById('btn');
button.addEventListener('click', getSum);