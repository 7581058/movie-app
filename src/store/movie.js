import { Store } from '../core/vic'

const store = new Store({
  searchText: '',
  page: 1,
  pageMax: 1,
  movies: [],

  // 영화 상세정보 데이터
  movie: {},

  loading: false,
  message: 'Search for the movie title',
})

export default store

export const searchMovies = async (page) => {
  store.state.loading = true
  store.state.page = page
  if (page === 1) {
    store.state.movies = []
    store.state.message = ''
  }

  try {
    const res = await fetch(
      `https://omdbapi.com?apikey=14c167f8&s=${store.state.searchText}&page=${page}`
    )

    const { Search, totalResults, Response, Error } = await res.json()
    if (Response === 'True') {
      store.state.movies = [...store.state.movies, ...Search]
      store.state.pageMax = Math.ceil(Number(totalResults) / 10)
    } else {
      store.state.message = Error
    }
  } catch (error) {
    console.log('searchMovies error:', error)
  } finally {
    store.state.loading = false
  }
}

export const getMovieDetails = async (id) => {
  try {
    const res = await fetch(
      `https://omdbapi.com?apikey=14c167f8&i=${id}&plot=full`
    )
    store.state.movie = await res.json()
  } catch (error) {
    console.log('getMovieDetails error:', error)
  }
}
