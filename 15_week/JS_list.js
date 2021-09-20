function choice() {
    if (document.getElementById("list").value === "White")
        document.getElementById("result").style.backgroundColor = "White";
    if (document.getElementById("list").value === "Pink")
        document.getElementById("result").style.backgroundColor = "LightPink";
    if (document.getElementById("list").value === "Blue")
        document.getElementById("result").style.backgroundColor = "DeepSkyBlue";
    if (document.getElementById("list").value === "Violet")
        document.getElementById("result").style.backgroundColor = "Violet";
    if (document.getElementById("list").value === "Green")
        document.getElementById("result").style.backgroundColor = "PaleGreen";
}