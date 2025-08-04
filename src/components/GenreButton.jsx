// GenreButton component renders a button that opens the sidebar when clicked
export default function GenreButton({ openSidebar }) {
    return (
      <button
        onClick={openSidebar}
        className="bg-neon-blue text-black font-bold px-4 py-2 rounded shadow"
      >
        Browse by Genre
      </button>
    );
  }
  