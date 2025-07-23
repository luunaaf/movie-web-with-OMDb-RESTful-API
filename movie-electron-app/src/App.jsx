import { useState } from 'react'
import './App.css'

function App() {
  const [movie, setMovie] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {movie};

    fetch("http://www.omdbapi.com/?t="+{data}+"&apikey="+ import.meta.env.VITE_OMDB_API_KEY,{
      mode: 'no-cors',
      method: 'POST',
      headers: {"Content-type": "application/json"},
      body: JSON.stringify(data),
    }).then(()=>{
      console.log("i did something hehe")
    });
  }

  return (
    <>
      <h1>Movie Finder</h1>
      <div className="card">
        <form onSubmit={handleSubmit}>
          <input type="text" value = {movie} onChange = {e => setMovie(e.target.value)}className="movie-search-bar" placeholder='Search for your favorite movie!'/>
            
            <button onClick={handleSubmit}>Search</button>
            <br></br>
            You have searched for the movie {movie}!
        </form>  
      </div>
    </>
  )
}

export default App
