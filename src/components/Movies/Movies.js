import { useState, useEffect, useCallback } from 'react';
import getMovies from './utils/getMovies';
import Count from '../Count'
import CommentForm from '../CommentForm'
import Comment from '../Comment'
import Pagination from '../Pagination'

import './Movies.css'
function Movies() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(5);
  const [comments, setComments] = useState([])

  const fetchMovies = useCallback(
    async (page, limit) => {
      setIsLoaded(true)
      const movies = await getMovies(page, limit);
      setIsLoaded(false)
      setMovies(movies)
    },
    [],
  )

  const nextPage = useCallback(
    async () => {
      setPage(page + 1)


    }, [page]

  )


  const prevPage = useCallback(
    async () => {
      if (page > 1) {
        setPage(page - 1)

      }
    }, [page]
  )

  const selectItem = useCallback(
    async (event) => {
      event.preventDefault()
      setLimit(event.target.value)
    }, []
  )

  const saveComment = useCallback(
    (value) => {
      const newCommentArray = [...comments, value]
      setComments(newCommentArray)

    }, [comments]
  )

  const deleteComment = useCallback((index) => () => {
    const deleteArr = [...comments]
    deleteArr.splice(index, 1)

    setComments(deleteArr)
  }, [comments])

  useEffect(() => {
    fetchMovies(page, limit)
  }, [page, limit])


  if (isLoaded) {
    return <div>Загрузка...</div>;
  } else {
    return (

      <div>
        <div className="countClass"><Count limit={limit} selectItem={selectItem} /></div>
        {movies.map(item => {
          const movieComment = comments.filter((comment) => comment.movieId === item.id)
          return (
            <div className="container">
              <div className="row" key={item.id}>
                <div className="column1"><img src={item.medium_cover_image} /></div>
                <div className="column2"  >
                  <h2>{item.title} ({item.year})</h2>
                  <div><b>Genre:</b> {item.genres[0]}</div>
                  <div><b>Description:</b> {item.synopsis}</div>
                  <div><b>Running time:</b> {item.runtime} min</div>
                  <div><b>Rating:</b> {item.rating}</div>
                </div>
                <div className="column3"><CommentForm saveComment={saveComment} movieId={item.id} /></div>
              </div>
              <div><Comment comments={movieComment} delete={deleteComment} /></div>
            </div>

          )
        })}
        <Pagination page={page} prevPage={prevPage} nextPage={nextPage} />
      </div>
    );
  }
}



export default Movies;
