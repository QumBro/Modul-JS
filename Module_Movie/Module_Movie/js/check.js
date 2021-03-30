function chechFavor() {
    let data = JSON.parse(localStorage.getItem('favorMovies')) || [];
    data.forEach(elem => {
        let cardss = document.getElementById(`${elem}`)
        if (!cardss) return
        let icons = cardss.querySelector('.icon')
        icons.className = 'fas fa-heart icon'
    })
}

function chechFavor2(id) {
    let cardss = document.getElementById(`${id}`)
    let icons = cardss.querySelector('.icon')
    icons.className = 'fas fa-heart icon'
    console.log(icons);
}