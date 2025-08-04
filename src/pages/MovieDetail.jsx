import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieDetails } from "../api";

// MovieDetail component shows detailed information for a selected movie
export default function MovieDetail() {
  const { id } = useParams(); // Get movie ID from URL parameters
  const [movie, setMovie] = useState(null); // State to store movie details
  const [loading, setLoading] = useState(true); // Loading state

  useEffect(() => {
    // Fetch movie details when component mounts or ID changes
    getMovieDetails(id).then((data) => {
      setMovie(data);
      setLoading(false); // Data loaded, stop loading state
    });
  }, [id]);

  if (loading) {
    // Show loading message while fetching data
    return (
      <div className="flex justify-center items-center min-h-screen text-neon-blue">
        Loading...
      </div>
    );
  }

  if (!movie) {
    // Show error if movie not found
    return (
      <div className="flex justify-center items-center min-h-screen text-red-500">
        Movie not found
      </div>
    );
  }

  return (
    // Main container for movie details
    <div className="min-h-screen flex justify-center items-start p-6 bg-black text-white">
      <div className="max-w-4xl w-full bg-gray-900 rounded-lg shadow-lg p-6">
        {/* Movie poster */}
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          className="mx-auto rounded mb-4"
        />
        {/* Movie title */}
        <h1 className="text-3xl font-bold mb-2 text-center">{movie.title}</h1>
        {/* Movie rating */}
        <p className="text-center mb-4">⭐ {movie.vote_average}</p>
        {/* Movie overview/description */}
        <p>{movie.overview}</p>
        {/* Add more movie details here as needed */}
      </div>
    </div>
  );
}
