
let pag = document.querySelector('.pagination')
let next = document.querySelector('.Next')
let prev = document.querySelector('.Previous')
let pageArr = [1, 2, 3, 4, 5]
let curPage = 1

function createLi() {
    let ul = document.querySelector('.pagination')
    ul.innerHTML = `
        <li class="page-item">
            <a class="page-link Previous" onclick="nextPage('prev')">
                <span aria-hidden="true">&laquo;</span>
            </a>
        </li>
    `
    pageArr.forEach(elm => {
        let li = document.createElement('li')
        let a = document.createElement('a')
        li.className = 'page-item item'
        li.setAttribute('id', `${elm}`)
        a.className = 'page-link'
        a.setAttribute('onclick', `goPage(${elm})`)
        a.innerText = elm
        li.append(a)
        pag.append(li, next)
    })

    let lis = document.getElementById(`${curPage}`)
    lis.classList.toggle('active')
}

function nextPage(params) {
    switch (params) {
        case 'prev':
            if(curPage<4) return;
            pageArr = pageArr.map((item) => item-1)
            curPage = curPage-1
            createLi()
            reCard(curPage)
            break;
        case 'next':
            pageArr = pageArr.map((item) => item+1)
            curPage = curPage+1
            createLi()
            reCard(curPage)
            break;
        default:
            break;
    }
}

function goPage(params) {
    curPage = params
    reCard(params)
    if (params > 2) {
        pageArr = [params-2, params-1, params, params+1, params+2]
        createLi()
    }
    if (params == 1) {
        pageArr = [1, 2, 3, 4, 5]
        createLi()
    }
}