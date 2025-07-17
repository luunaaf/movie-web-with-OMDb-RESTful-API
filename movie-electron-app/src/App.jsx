import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Movie Searcher</h1>
      <div className="card">
        <input className="movie-search-bar" placeholder='Search for your favorite movie!'/>
          
          <button onClick={() => setCount((count) => count + 1)}>Search</button>
          <br></br>
          You have searched {count} time(s)!
      </div>
    </>
  )
}

export default App
