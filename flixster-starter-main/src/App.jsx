import { useState, useEffect } from 'react';
import './App.css';
import Header from './Header';
import MovieGrid from './MovieGrid';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchNowPlayingData = async () => {
      setLoading(true);
      try {
        const apiKey = import.meta.env.VITE_API_KEY;
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&language=en-US&page=${pageNumber}`
        );
        if (!response.ok) {
          throw new Error('Failed to fetch movie data');
        }
        const data = await response.json();
        setMovies((prevMovies) => [...prevMovies, ...data.results]);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchNowPlayingData();
  }, [pageNumber]);

  return (
    <div className="App">
      <Header />
      <MovieGrid movies={movies} loading={loading} />
    </div>
  );
};

export default App;
