const MOVIE_SERVICE = {
    getAllMovie : (function () {
        return $.ajax({
            type : 'get',
            url : 'https://pelec4.herokuapp.com/movies'
        })
    })
}