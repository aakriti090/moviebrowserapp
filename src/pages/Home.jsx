import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { getMovies, getMoviesByGenre } from "../api";
import Sidebar from "../components/Sidebar";
import MovieCard from "../components/MovieCard";

// Home component displays popular movies or movies filtered by genre
export default function Home() {
  const [movies, setMovies] = useState([]); // State to store movies
  const [showSidebar, setShowSidebar] = useState(false); // Control sidebar visibility
  const [selectedGenreName, setSelectedGenreName] = useState(""); // Currently selected genre name

  const location = useLocation();

  // Fetch popular movies whenever user is on the home route
  useEffect(() => {
    if (location.pathname === "/") {
      getMovies().then(setMovies);
      setSelectedGenreName(""); // Reset selected genre label
    }
  }, [location]);

  // Fetch movies by selected genre and update state
  const handleGenreSelect = async (genreId, genreName) => {
    const moviesByGenre = await getMoviesByGenre(genreId);
    setMovies(moviesByGenre);
    setSelectedGenreName(genreName);
  };

  return (
    <div className="p-10">
      {/* Header section with genre title and button to open sidebar */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold text-white">
          {selectedGenreName ? `Genre: ${selectedGenreName}` : "Popular Movies"}
        </h2>
        <button
          onClick={() => setShowSidebar(true)} // Show the genre sidebar
          className="bg-neon-blue text-black font-bold px-4 py-2 rounded shadow"
        >
          Browse by Genre
        </button>
      </div>

      {/* Sidebar component for genre selection, shown conditionally */}
      {showSidebar && (
        <Sidebar
          onSelectGenre={handleGenreSelect} // Pass genre selection handler
          closeSidebar={() => setShowSidebar(false)} // Handler to close sidebar
        />
      )}

      {/* Grid layout for displaying movie cards */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-10">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}
