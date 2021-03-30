'use strict'

let getData = new GetData({})
window.location = '?#';

let delCol = () => {
    let col = document.getElementsByClassName('col')
    for (var i = col.length - 1; i >= 0; i--) {
        col[i].parentNode.removeChild(col[i])
    }
    let mudila = document.getElementsByClassName('mudila')
    for (var i = mudila.length - 1; i >= 0; i--) {
        mudila[i].parentNode.removeChild(mudila[i])
    }
}

function reCard(params) {
    delCol()
    addCardHome(params)
}

let addCardHome = (page) => {

    getData.trending(page).then(data => {
        createCard(data)
        chechFavor()
    })
}
createLi()
addCardHome()
