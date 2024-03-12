import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import './MovieDetail.css';


const MovieDetail = () => {
  const [currentMovideDetail, setMovie] =  useState();
  const {id} = useParams();

  const getData = () => {
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`)
    .then(response => response.json())
    .then(data => setMovie(data));
  }

  useEffect(() => {
    getData();
    window.scrollTo(0, 0)
  }, []);

  return(
   <div className='movie'>
     <div className='movie__intro'>
     <img className='movie__backdrop' src={`https://image.tmdb.org/t/p/original${currentMovideDetail ? currentMovideDetail.backdrop_path: ''}`} alt='movie-cover' />
     </div>
     <div className='movie__detail'>
     <div className='movide__detailLeft'>
     <div className='movie__posterBox'>
     <img className='movie__poster' src={`https://image.tmdb.org/t/p/original${currentMovideDetail ? currentMovideDetail.poster_path : ''}`} alt='movie-poster' />
     </div>
     </div>
       <div className='movie__detailRight'>
        <div className='movie__detailRightTop'>
        <div className='movie__name'>{currentMovideDetail ? currentMovideDetail.original_title : ''}</div>
          <div className='movide__tagline'>{currentMovideDetail ? currentMovideDetail.tagline : ''}</div>
          <div className='movie__rating'>
            {currentMovideDetail ? currentMovideDetail.vote_average.toFixed(1) : ''} <i class='fas fa-start' />
            <span className='movie__voteCount'>{currentMovideDetail ? "(" + currentMovideDetail.vote_count + ") votes" : '' }</span>
          </div>
          <div className='movie__runtime'>{currentMovideDetail ? currentMovideDetail.runtime + 'mins' : ''}</div>
          <div className='movie__releaseDate'>{currentMovideDetail ? 'relsease date' + currentMovideDetail.release_date : ''}</div>
          <div className='movie__genres'>
            {
              currentMovideDetail && currentMovideDetail.genres ? 
              currentMovideDetail.genres.map(genre => (
                <><span className='movie__genre'id={genre.id}>{genre.name}</span></>
              ))
              :
              ""
            }
          </div>
        </div>
         <div className='movie__detailRightBottom'>
         <div className='descriptionText'>description</div>
           <div>{currentMovideDetail ? currentMovideDetail.overview : ''}</div>
         </div>
         </div>
       </div>
      <div className='movie__links'>
        {
          currentMovideDetail && currentMovideDetail.homepage && <a href={currentMovideDetail.homepage} target='_blank' rel='noreferrer' style={{textDecoration: 'none'}}><p><span className='movie__homeButton movie__Button'>Homepage<i className='newTab fas fa-external-link-alt'></i></span> </p></a>
        }
        {
          currentMovideDetail && currentMovideDetail.imdb_id && <a href={"https://www.imdb.com/title/" + currentMovideDetail.imdb_id} target='_blank' rel='noreferrer' style={{textDecoration: 'none'}}><p><span className='movie__imdbButton movie__Button'>IMDb<i className='newTab fas fa-external-link-alt'></i></span> </p></a>
        }
      </div>
       <div className='movie__production'>
         {
           currentMovideDetail && currentMovideDetail.production_companies && currentMovideDetail.production_companies.map(company => (
             <>
               {
               company.logo_path &&
                 <span className='productionCompanyImage'>
                 <img className='movie__productionCompany' src={'https://image.tmdb.org/t/p/original' + company.logo_path} alt='movie-company' />
                   <span>{company.name}</span>
                 </span>
               }
             </>
           ))
         }
       </div>
     </div>
  
    
  );
}
export default MovieDetail;