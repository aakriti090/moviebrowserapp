import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MovieCard from "../components/MovieCard";
import { searchMovies } from "../api"; // Function to fetch movies based on search query

// SearchResults component displays movies matching the search query
export default function SearchResults() {
  const { query } = useParams(); // Get search query from URL params
  const [movies, setMovies] = useState([]); // State to hold search results
  const [loading, setLoading] = useState(true); // Loading state

  useEffect(() => {
    if (query) {
      setLoading(true); // Set loading before fetching
      searchMovies(query).then((results) => {
        setMovies(results); // Store search results
        setLoading(false);  // Stop loading after data is fetched
      });
    }
  }, [query]);

  if (loading) return <div className="p-4 text-neon-blue">Loading...</div>;

  return (
    <div className="p-4">
      {/* Title showing the search query */}
      <h2 className="text-2xl mb-4">Search results for: "{query}"</h2>

      {/* Show message if no movies found */}
      {movies.length === 0 ? (
        <p>No movies found.</p>
      ) : (
        // Display movies in a responsive grid
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10">
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      )}
    </div>
  );
}
