import React from 'react';
import './Header.css';
import {Link} from 'react-router-dom';

const Header = () => {
  return(
    <div className='header'>
    <div className='headerLeft'>
    <Link to='/'><img src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/2560px-IMDB_Logo_2016.svg.png' alt='app-logo' className='header__icon' /></Link>
      <Link to='/movies/popular' style={{textDecoration: 'none'}}><span>popular</span></Link>
      <Link to='/movies/top_rated' style={{textDecoration: 'none'}}><span>top rated</span></Link>
      <Link to='/movies/upcoming' style={{textDecoration: 'none'}}><span>upcoming</span></Link>
    </div>
    </div>
  )
}

export default Header;