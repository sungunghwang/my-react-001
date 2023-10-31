import { Routes, Route, Link } from 'react-router-dom'

import Home from './pages/Home'
import About from './pages/About'
import Count from './pages/Count'
import List from './pages/List'
import Movie from './pages/Movie'

function App() {
  return (
    <div className="App">
      <nav>
        <Link to={'/'}>Home</Link> &nbsp;
        <Link to={'/About'}>About</Link> &nbsp;
        <Link to={'/Count'}>Count</Link> &nbsp;
        <Link to={'/List'}>List</Link> &nbsp;
        <Link to={'/Movie'}>Movie</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/About" element={<About />}></Route>
        <Route path="/Count" element={<Count />}></Route>
        <Route path="/List" element={<List />}></Route>
        <Route path="/Movie" element={<Movie />}></Route>
      </Routes>
    </div>
  )
}

export default App
