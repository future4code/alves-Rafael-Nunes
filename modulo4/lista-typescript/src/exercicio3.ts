type Movie ={
  name:string,
  year:number
  genre:Genre,
  avaluation?:number
}

enum Genre {
	ACAO="ação",
	DRAMA="drama",
	COMEDIA="comédia",
	ROMANCE="romance",
	TERROR="terror"
}

function showMovies (name:string, year:number, genre:Genre, avaluation?:number ){
  const showMovies:Movie = {
    name:name,
    year:year,
    genre:genre,
    avaluation:avaluation
  }
  return showMovies
}

console.table(showMovies('Velozes e furiosos', 2001, Genre.ACAO, 10))


