import { Link } from "react-router-dom";

// MovieCard component displays a single movie card with image, title, and rating
function MovieCard({ movie }) {
  return (
    // Link to the movie detail page using movie ID
    <Link
      to={`/movie/${movie.id}`}
      className="bg-grayish rounded p-2 shadow hover:scale-105 duration-200 text-neon"
    >
      {/* Movie poster image */}
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        className="w-full rounded"
      />

      {/* Movie title */}
      <h2 className="text-lg mt-2 font-semibold">{movie.title}</h2>

      {/* Movie rating */}
      <p>⭐ {movie.vote_average}</p>
    </Link>
  );
}

export default MovieCard;
