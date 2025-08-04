import { useEffect, useState } from "react";
import { getGenres } from "../api";

// Sidebar component shows a list of genres for selection
export default function Sidebar({ onSelectGenre, closeSidebar }) {
  const [genres, setGenres] = useState([]); // State to store fetched genres

  useEffect(() => {
    // Fetch genres when component mounts
    getGenres().then(setGenres);
  }, []);

  return (
    // Sidebar container fixed on the right side of the screen
    <div className="fixed right-0 top-0 h-full w-64 bg-black text-neon-blue p-4 shadow-lg z-50">
      {/* Close button to hide the sidebar */}
      <button className="mb-4 text-white" onClick={closeSidebar}>❌ Close</button>

      {/* Sidebar title */}
      <h2 className="text-xl font-bold mb-4">Genres</h2>

      {/* List of genres */}
      <ul className="space-y-2">
        {genres.map((genre) => (
          <li
            key={genre.id}
            onClick={() => {
              onSelectGenre(genre.id, genre.name); // Notify parent of selected genre
              closeSidebar(); // Close sidebar after selection
            }}
            className="cursor-pointer hover:text-white"
          >
            {genre.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
