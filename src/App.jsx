import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import MovieDetail from "./pages/MovieDetail";
import SearchResults from "./pages/SearchResults";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";

// Main App component that sets up routing and global UI state
export default function App() {
  const [showSidebar, setShowSidebar] = useState(false); // Controls sidebar visibility
  const [genreId, setGenreId] = useState(null); // Currently selected genre ID

  return (
    <Router>
      <div className="bg-green min-h-screen text-white flex flex-col">
        
        {/* Navbar with button to open sidebar */}
        <Navbar openSidebar={() => setShowSidebar(true)} />

        {/* Sidebar shown conditionally on top of main content */}
        {showSidebar && (
          <Sidebar
            onSelectGenre={(id) => {
              setGenreId(id);          // Set selected genre
              setShowSidebar(false);   // Close sidebar after selection
            }}
            closeSidebar={() => setShowSidebar(false)} // Close sidebar handler
          />
        )}

        {/* Main content area with routing */}
        <main className="pt-16">
          <Routes>
            {/* Home page with optional genre filter and ability to open sidebar */}
            <Route
              path="/"
              element={<Home genreId={genreId} openSidebar={() => setShowSidebar(true)} />}
            />
            {/* Movie detail page */}
            <Route path="/movie/:id" element={<MovieDetail />} />
            {/* Search results page */}
            <Route path="/search/:query" element={<SearchResults />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}
