function choice() {
    let result = document.getElementById("result");
    let list = document.getElementById("list");

    if (list.value === "White") {
        result.style.backgroundColor = "White";
    }
    if (list.value === "Pink") {
        result.style.backgroundColor = "LightPink";
    }
    if (list.value === "Blue") {
        result.style.backgroundColor = "DeepSkyBlue";
    }
    if (list.value === "Violet") {
        result.style.backgroundColor = "Violet";
    }
    if (list.value === "Green") {
        result.style.backgroundColor = "PaleGreen";
    }
}