(function () {
    function get(url) {
        return Promise.resolve(
            fetch(url)
                .then((response) => {
            return response.json();
        })
    )
};

const url = 'https://api.openweathermap.org/data/2.5/weather?q=+city+&appid=616629f9acdc3b22b8b09553e632e5da';

async function getCityWeather() {
    const city = document.querySelector('#city');
    get(url)
        .then((data) => {
            city = data.temp;
            console.log(city)
        })
        .catch((err) => {
        const contenedor = document.querySelector('#weatherByCity');
        contenedor.innerHTML += '<p>ERROR</p> <p>${err}</p>';
    });
};

const button = document.querySelector('#request');
button.addEventListener('click', getCityWeather)


}) ();