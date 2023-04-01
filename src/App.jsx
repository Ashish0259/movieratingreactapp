import React from 'react';
import {BrowserRouter as Router , Routes , Route} from 'react-router-dom';
import Header from './components/Header';
import MovieListComp from './components/MoviesListComp/MovieListComp';
import Home from './pages/Home';
import Movie from './pages/movieDetail/movie';
import Footer from './components/Footer';


const App = () => {
  return (
    <div className='App'>
      <Router>
      <Header />
        <Routes>
          <Route index element={<Home />}></Route>
          <Route path='movie/:id' element={<Movie />}></Route>
          <Route path='movies/:type' element={<MovieListComp />}></Route>
          
        </Routes>
      <Footer />
      </Router>
    </div>
  )
}

export default App