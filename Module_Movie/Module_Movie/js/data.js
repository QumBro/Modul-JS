'use strict'

let apiKey = '81c7fa638746fd07c4855150c00b0176'
let apiURL = 'https://api.themoviedb.org/3/'
let imgURL = 'https://image.tmdb.org/t/p/w500'

class GetData {
    constructor(options) {
        this.apiKey = `?api_key=${apiKey}`
        this.lang = options.lang ?? `ru-RU`
        this.langStr = `&language=${this.lang}`
        this.queryStr = ''
        this.page = ''
    }

    async api(str) {
        try {
            let json = (await fetch(apiURL + str + this.apiKey + this.langStr + this.queryStr + this.page)).json()
            return json
        } catch (error) {
            throw error
        }
    }

    genre() {
        this.page = ''
        return this.api('genre/movie/list').then(data => data.genres)
    }

    trending(page) {
        page = page ?? ''
        this.page = `&page=${page}`
        return this.api('movie/popular').then(data => data.results)
    }

    searh(search) {
        search = search ?? ''
        this.queryStr = `&query=${search}`
        return this.api('search/movie').then(data => data.results)
    }

    idMovie(id) {
        return this.api(`movie/${id}`).then(data => data)
    }
}
