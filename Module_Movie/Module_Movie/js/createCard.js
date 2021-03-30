const grid = document.querySelector('#movie-grid')
const t = document.querySelector('#cardTemp')
const h5 = t.content.querySelector('h5')
const img = t.content.querySelector('img')
const icon = t.content.querySelector('.icon')
const modTitle = t.content.querySelector('.modal-title')
const modFade = t.content.querySelector('.fade')

const modImg = t.content.querySelector('.modal-img')
const modAverage = t.content.querySelector('.average')
const modRelease = t.content.querySelector('.release')
const modOverview = t.content.querySelector('.overview')
const modGenre = t.content.querySelector('.genre')
const modLanguage = t.content.querySelector('.language')


let createCard = (data) => {
    data.forEach(({ title, poster_path, id, vote_average, release_date, overview }) => {
        if (poster_path == null) return
        const cards = t.content.querySelector('.card')
        cards.setAttribute('id', `${id}`)

        icon.setAttribute('onclick', `lol(this, ${id});`)

        h5.innerText = title
        img.setAttribute('src', imgURL + poster_path)

        img.setAttribute('data-bs-toggle', 'modal')
        img.setAttribute('data-bs-target', `#modal${id}`)

        modTitle.innerText = title;
        modImg.setAttribute('src', imgURL + poster_path);
        modAverage.innerText = vote_average;
        modRelease.innerText = release_date;
        modOverview.innerText = overview;

        modFade.setAttribute('id', `modal${id}`)
        const card = t.content.cloneNode(true)
        grid.append(card)
    });
}

function lol(elem, id) {
    if (elem.classList.contains('far')) {
        elem.classList.remove('far');
        elem.classList.add('fas');
        let arr = JSON.parse(localStorage.getItem('favorMovies')) || [];
        arr.push(id);
        localStorage.setItem('favorMovies', JSON.stringify(arr));
    } else {
        elem.classList.remove('fas');
        elem.classList.add('far');
        let arr = JSON.parse(localStorage.getItem('favorMovies'));
        arr = arr.filter(item => id !== item)
        localStorage.setItem('favorMovies', JSON.stringify(arr));
    }
}