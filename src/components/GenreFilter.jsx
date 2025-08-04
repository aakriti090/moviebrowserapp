import { useEffect, useState } from 'react';
import { fetchGenres } from '../api';

// GenreFilter component allows users to filter movies by genre
export default function GenreFilter({ onGenreChange }) {
  const [genres, setGenres] = useState([]); // State to store genres

  useEffect(() => {
    // Fetch genres from API when the component mounts
    fetchGenres().then(setGenres);
  }, []);

  return (
    <div className="flex flex-wrap gap-2 mb-4">
      {/* Button to show all movies regardless of genre */}
      <button
        onClick={() => onGenreChange('')}
        className="bg-blue-600 hover:bg-blue-700 text-white py-1 px-3 rounded-full"
      >
        All
      </button>

      {/* Render a button for each genre */}
      {genres.map((genre) => (
        <button
          key={genre.id}
          onClick={() => onGenreChange(genre.id)} // Call handler with selected genre id
          className="bg-gray-800 hover:bg-gray-700 text-white py-1 px-3 rounded-full"
        >
          {genre.name}
        </button>
      ))}
    </div>
  );
}
