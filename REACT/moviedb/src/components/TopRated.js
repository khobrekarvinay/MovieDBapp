import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTopRatedMovies, searchMovies } from '../redux/movieActions.js';
import { Link } from 'react-router-dom';

const TopRatedPage = () => {
  const dispatch = useDispatch();
  const { topRated =[], searched= [], loading, error } = useSelector((state) => state.movies);

  useEffect(() => {
    if (!searched.length) {
      dispatch(fetchTopRatedMovies());
    }
  }, [dispatch, searched]);

  const moviesToDisplay = searched.length > 0 ? searched : topRated;
  return (
    <div style={{ padding: '2rem' }}>
      <h1 style={{ marginBottom: '1rem', color: 'white' }}>
        {searched.length > 0 ? 'Search Results' : 'Top Rated Movies'}
      </h1>
      {loading && <p>Loading movies...</p>}
      {error && <p>Error: {error}</p>}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
          gap: '2rem',
        }}
      >
        {moviesToDisplay.map((movie) => (
          <Link
            key={movie.id}
            to={`/movie/${movie.id}`}
            style={{
              textDecoration: 'none',
              display: 'block',
            }}
          >
            <div
              style={{
                borderRadius: '8px',
                padding: '1rem',
                textAlign: 'center',
                background: '#1c1c1c',
                boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.3)',
              }}
            >
              <img
                src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
                alt={movie.title}
                style={{
                  width: '100%',
                  height: '300px',
                  objectFit: 'cover',
                  borderRadius: '8px',
                }}
              />
              <h2 style={{ fontSize: '1.2rem', color: 'white', margin: '0.5rem 0' }}>
                {movie.title}
              </h2>
              <p style={{ color: 'gray' }}>Rating: {movie.vote_average}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TopRatedPage;
