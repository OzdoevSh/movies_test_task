const getMovies = async (page, limit) => {
    const response = await fetch(`https://yts.mx/api/v2/list_movies.json?limit=${limit}&page=${page}`)
    const result = await response.json()
    console.log(result.data.movies)
    return result.data.movies
}

export default getMovies