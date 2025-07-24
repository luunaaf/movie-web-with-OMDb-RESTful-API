import { useState } from 'react'
import './App.css'

function App() {
  const [movie, setMovie] = useState('')
  const [title, setTitle] = useState(null);
  const [isSearched, setIsSearched] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {movie};

    fetch(`http://www.omdbapi.com/?t=${movie}&apikey=${import.meta.env.VITE_OMDB_API_KEY}`,{
      method: 'GET',
    })
    .then((response)=> {return response.json()})
    .then((search) => {
      setIsSearched(true);
      setTitle(search.Title);
      console.log("This your fav movie?"+search.Title)
    });
  }

  return (
    <>
      <h1>Movie Finder</h1>
      <div className="card">
        <form onSubmit={handleSubmit}>
          <input type="text" value = {movie} onChange = {e => setMovie(e.target.value)}className="movie-search-bar" placeholder='Search for your favorite movie!'/>
            <button>Search</button>
        </form>
        {isSearched &&
        <div>{title}
        </div>}  
      </div>
    </>
  )
}

export default App
