(function () {
    function get(url) {
        return Promise.resolve(
            fetch(url)
                .then((response) => {
            return response.json();
        })
    )
};

const url = 'https://dog.ceo/api/breeds/image/random';

async function getDog() {
    const image = document.querySelector('#doggy');
    get(url)
        .then((data) => {
            image.src = data.message;
        })
        .catch((err) => {
        const contenedor = document.querySelector('#theDog');
        contenedor.innerHTML += '<p>ERROR</p> <p>${err}</p>';
    });
};

const button = document.querySelector('#buttonDog');
button.addEventListener('click', getDog)

getDog()
}) ();