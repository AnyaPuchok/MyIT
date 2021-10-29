document.addEventListener("DOMContentLoaded",
        function (event) {
            fetch('https://api.nasa.gov/planetary/apod?api_key=w6wlEkv0GaOWSMxY3hlxxJ1vGN6Z8w0YQwrnchze')
                .then(response => response.json())
                .then(apod => {
                    document.getElementById("one").innerHTML = apod.title;
                    document.getElementById("src").src = apod.url;
                    document.getElementById("two").innerText = apod.explanation;
                    
})
        })