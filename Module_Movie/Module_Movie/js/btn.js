let btnLogo = document.getElementById('logo')
let btnHome = document.getElementById('home')
let btnFavor = document.getElementById('favor')
let btnSearch = document.getElementById('btnSearch')
let inputSearch = document.getElementById('inputSearch')

btnLogo.addEventListener('click', () => {
    goPage(1)
})

btnHome.addEventListener('click', () => {
    goPage(1)
})

btnFavor.addEventListener('click', () => {
    delCol()

    let obj = JSON.parse(localStorage.getItem('favorMovies'))
    let arrID = Array.from(obj)

    arrID.forEach(id => {
        getData.idMovie(id).then(data => {
            createCard([data]);
            chechFavor2(data.id);
        })
    })
    
})

btnSearch.addEventListener('click', () => {
    delCol()
    getData.searh(inputSearch.value)
        .then(data => createCard(data))
})