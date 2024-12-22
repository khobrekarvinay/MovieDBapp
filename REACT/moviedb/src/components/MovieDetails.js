import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchMovieDetails, fetchMovieCast } from '../redux/movieActions.js';

const MovieDetails = () => {
  const dispatch = useDispatch();
  const { id } = useParams(); 
  const { movieDetails, cast, loading, error } = useSelector((state) => state.movies);

  useEffect(() => {
    dispatch(fetchMovieDetails(id)); 
    dispatch(fetchMovieCast(id)); 
  }, [dispatch, id]);

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  if (error) {
    return <div className="error">{error}</div>;
  }

  if (!movieDetails) {
    return <div className="error">Movie details not found</div>;
  }

  return (
    <div>
      {/* Backdrop section */}
      <div 
        className="movie-background" 
        style={{ 
          backgroundImage: movieDetails.backdrop_path ? 
            `url(https://image.tmdb.org/t/p/original/${movieDetails.backdrop_path})` : 
            'url(/default-background.jpg)', // fallback if no backdrop is available
          backgroundSize: 'cover',
          backgroundPosition: 'center top',
          height: '500px', // Increased height to show more backdrop
          position: 'relative',
          color: 'white'
        }}
      >
        {/* Brightened and faded gradient overlay */}
        <div 
          style={{
            background: 'linear-gradient(to left, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 100%)',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            padding: '30px',
            boxSizing: 'border-box'
          }}
        >
          {/* Poster */}
          <div className="poster-container" style={{ flexShrink: 0, marginRight: '20px', maxWidth: '220px' }}>
            {movieDetails.poster_path ? (
              <img 
                src={`https://image.tmdb.org/t/p/original/${movieDetails.poster_path}`} 
                alt={movieDetails.title} 
                style={{ width: '100%', borderRadius: '10px' }}
              />
            ) : (
              <p>No poster available</p>
            )}
          </div>

          {/* Movie details */}
          <div className="info-container" style={{ flex: 1 }}>
            <h1 className="movie-title" style={{ marginBottom: '10px' }}>{movieDetails.title}</h1>
            <p className="rating" style={{ marginBottom: '10px' }}>Rating: {movieDetails.vote_average}</p>

            <div className="details-row" style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '20px' }}>
              <span className="detail-box">Runtime: {movieDetails.runtime} min</span>
              <span className="detail-box">Genre: {movieDetails.genres.map((g) => g.name).join(', ')}</span>
              <span className="detail-box">Release Date: {movieDetails.release_date}</span>
            </div>

            <div className="overview" style={{ overflowWrap: 'break-word' }}>
              <h2 style={{ marginBottom: '10px' }}>Overview</h2>
              <p style={{ maxWidth: '60%', display: 'inline-block', lineHeight: '1.6' }}>{movieDetails.overview}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Cast section */}
      <div className="cast-section" style={{ padding: '20px' }}>
        <h2>Cast</h2>
        <div className="cast-grid" style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
          {cast && cast.length > 0 ? (
            cast.map((actor) => (
              <div key={actor.id} className="cast-card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '200px' }}>
                <img 
                  src={actor.profile_path ? `https://image.tmdb.org/t/p/w200/${actor.profile_path}` : '/default-profile.png'} 
                  alt={actor.name} 
                  className="actor-photo" 
                  style={{ borderRadius: '50%', width: '150px', height: '150px', objectFit: 'cover' }}
                />
                <p className="actor-name" style={{ fontWeight: 'bold' }}>{actor.name}</p>
                <p className="character-name" style={{ fontStyle: 'italic' }}>Character: {actor.character}</p>
              </div>
            ))
          ) : (
            <p>No cast information available.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
