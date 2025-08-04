# Movie Browser App

A React-based web application to browse popular movies, filter by genre, search movies, and view detailed information using The Movie Database (TMDb) API.

---

## Features

- Display popular movies on the home page
- Browse movies by genre using a sidebar
- Search movies by name
- View detailed information for each movie (title, rating, overview, poster)
- Responsive grid layout and smooth UI interactions

---


## Technologies Used

- React with functional components and hooks
- React Router for client-side routing
- Axios for API calls
- Tailwind CSS for styling
- The Movie Database (TMDb) API for movie data

---

## Getting Started

### Prerequisites

- Node.js and npm installed on your machine

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/movie-browser.git
   cd movie-browser
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and add your TMDb API key:

   ```env
   REACT_APP_TMDB_API_KEY=your_api_key
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```


## Environment Variables

- `REACT_APP_TMDB_API_KEY` — Your TMDb API key. Required for API requests.

---

## How to Use

- Browse popular movies on the homepage
- Click **Browse by Genre** to filter movies by genres
- Use the search bar in the navbar to find movies by title
- Click on a movie card to see detailed information about that movie

---

## Contributing

Contributions are welcome! Feel free to open issues or submit pull requests.

---

## License

This project is licensed under the MIT License.

---

## Acknowledgments

- [The Movie Database (TMDb) API](https://www.themoviedb.org/documentation/api)
- Tailwind CSS
- React Router
