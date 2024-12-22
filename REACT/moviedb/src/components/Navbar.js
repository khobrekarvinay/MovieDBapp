import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { searchMovies } from '../redux/movieActions.js';

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
    if (e.target.value.trim()) {
      dispatch(searchMovies(e.target.value));
    } else {
      dispatch(searchMovies(''));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search/${searchQuery}`);
    }
  };

  return (
    <nav
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '1rem 2rem',
        background: '#333',
        color: '#fff',
      }}
    >
      
      <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'yellow' }}>
        MovieDB
      </div>

      
      <div style={{ display: 'flex', gap: '2rem' }}>
        <NavLink
          to="/"
          style={({ isActive }) => ({
            color: isActive ? 'yellow' : 'white',
            textDecoration: 'none',
            fontSize: '1rem',
          })}
        >
          Home
        </NavLink>
        <NavLink
          to="/top-rated"
          style={({ isActive }) => ({
            color: isActive ? 'yellow' : 'white',
            textDecoration: 'none',
            fontSize: '1rem',
          })}
        >
          Top Rated
        </NavLink>
        <NavLink
          to="/upcoming"
          style={({ isActive }) => ({
            color: isActive ? 'yellow' : 'white',
            textDecoration: 'none',
            fontSize: '1rem',
          })}
        >
          Upcoming
        </NavLink>
      </div>

      
      <form
        onSubmit={handleSubmit}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
        }}
      >
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearch}
          placeholder="Search Movies..."
          style={{
            padding: '0.5rem',
            borderRadius: '4px',
            border: '1px solid #ccc',
            fontSize: '1rem',
          }}
        />
        <button
          type="submit"
          style={{
            padding: '0.5rem 1rem',
            borderRadius: '4px',
            border: 'none',
            background: 'yellow',
            color: '#333',
            fontSize: '1rem',
            cursor: 'pointer',
          }}
        >
          Search
        </button>
      </form>
    </nav>
  );
};

export default Navbar;
