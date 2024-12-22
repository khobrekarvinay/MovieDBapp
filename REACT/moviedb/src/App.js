import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.js';
import TopRatedPage from './components/TopRated.js';
import UpcomingPage from './components/Upcoming.js';
import MovieDetailPage from './components/MovieDetails.js';
import HomePage from './components/Home.js';


const App = () => (
  <>
    <Navbar />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/top-rated" element={<TopRatedPage />} />
      <Route path="/upcoming" element={<UpcomingPage />} />
      <Route path="/movie/:id" element={<MovieDetailPage />} />
    </Routes>
  </>
);

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;




