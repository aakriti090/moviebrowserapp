import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

// Navbar component with a title, search bar, and home button
function Navbar() {
  const [query, setQuery] = useState(""); // State for the search input
  const navigate = useNavigate(); // Hook to programmatically navigate

  // Handle form submission for searching movies
  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim()) {
      // Navigate to search results page with the query
      navigate(`/search/${query}`);
      setQuery(""); // Clear the input after search
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 p-4 bg-black text-neon-blue flex items-center justify-between shadow-neonGlow z-50">
      {/* Left section: Site title */}
      <div className="flex-1 text-left">
        <h1 className="text-2xl font-bold">Movie Browser</h1>
      </div>

      {/* Middle section: Search form */}
      <form
        onSubmit={handleSearch}
        className="flex flex-1 max-w-md mx-4"
        style={{ minWidth: "250px" }}
      >
        {/* Search input field */}
        <input
          type="text"
          placeholder="Search movies..."
          value={query}
          onChange={(e) => setQuery(e.target.value)} // Update query on input change
          className="flex-grow rounded-l-md p-2 text-black"
        />
        {/* Search button */}
        <button
          type="submit"
          className="bg-cyan-400 text-black px-4 rounded-r-md font-semibold"
        >
          Search
        </button>
      </form>

      {/* Right section: Home link */}
      <div className="flex-1 flex justify-end items-center space-x-6">
        <Link
          to="/"
          className="cursor-pointer text-cyan-400 hover:text-white transition-colors duration-200"
        >
          Home
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;