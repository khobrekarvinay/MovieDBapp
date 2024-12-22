import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPopularMovies, searchMovies } from '../redux/movieActions.js';
import { Link } from 'react-router-dom'; // Import Link

const HomePage = () => {
  const dispatch = useDispatch();
  const { popular, searched, loading, error } = useSelector((state) => state.movies);

  useEffect(() => {
    dispatch(fetchPopularMovies());
  }, [dispatch]);

  const moviesToDisplay = searched.length ? searched : popular;

  return (
    <div style={{ padding: '2rem' }}>
      <h1 style={{ marginBottom: '1rem', color: 'white' }}>Popular Movies</h1>

      {loading && <p>Loading movies...</p>}
      {error && <p>Error: {error}</p>}

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
          gap: '2rem',
        }}
      >
        {moviesToDisplay &&
          moviesToDisplay.map((movie) => {
            const imageUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

            return (
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
                    position: 'relative',
                    width: '100%',
                    padding: '10px',
                    backgroundColor: '#1c1c1c',
                    borderRadius: '8px',
                    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.3)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                  }}
                >
                  {/* Movie Image */}
                  <img
                    src={imageUrl}
                    alt={movie.title}
                    style={{
                      width: '100%',
                      height: 'auto',
                      borderRadius: '8px',
                      marginBottom: '1rem',
                    }}
                  />

                  <div style={{ textAlign: 'center' }}>
                    <h2 style={{ fontSize: '1.2rem', color: 'white', margin: '0 0 5px' }}>
                      {movie.title}
                    </h2>
                    <p style={{ color: 'gray' }}>Rating: {movie.vote_average}</p>
                  </div>
                </div>
              </Link>
            );
          })}
      </div>
    </div>
  );
};

export default HomePage;
