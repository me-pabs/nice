// Whatever you want here...
$(function(){
    var movieList = $('#movie-list');

    const getMovie = async () => {
        try{ 
            const getAllMovie = await MOVIE_SERVICE.getAllMovie();
            await getAllMovie.forEach(function(res) {
               console.log(res);
               makeMovieList(res.title, res.poster, res.plot, res.genres);
            });

            
        }
        catch(error){
            console.log(error);
        }
    }

    

    function makeMovieList(title, poster, plot, genres){
        if(poster) {
             var movieDescription = `<li>
                                        <a href="">
                                            <img src="${poster}"></img>
                                        </a>
                                    <h3>${title}</h3>
                                    <h3>${plot}</h3>
                                    <h3>${genres}</h3>
                                    </li>
                                `
        }
       
        movieList.append(movieDescription);
    }

    getMovie();
})