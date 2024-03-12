import React from 'react';
import './App.css';
import {Routes, Route} from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import MovieDetail from './pages/MovieDetail/MovieDetail';
import MovieList from './components/MovieList/MovieList';

function App() {
  return(
    <div className='App'>
    <Header />
      <Routes>
      <Route index element={<Home />} />
        <Route path='/movie/:id' element={<MovieDetail />} />
        <Route path='/movies/:type' element={<MovieList />} />
        <Route path='/*' element={<h2>error 404</h2>} />
      </Routes>
    </div>
  );
}

export default App;