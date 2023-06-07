// Sample movie data
const movies = [
  {
    title: "Inception",
    genre: "Action, Adventure, Sci-Fi",
    rating: "PG-13",
    year: "2010"
  },
  {
    title: "The Dark Knight",
    genre: "Action, Crime, Drama",
    rating: "PG-13",
    year: "2008"
  },
  {
    title: "Interstellar",
    genre: "Adventure, Drama, Sci-Fi",
    rating: "PG-13",
    year: "2014"
  },
  {
    title: "The Shawshank Redemption",
    genre: "Drama",
    rating: "R",
    year: "1994"
  },
  {
    title: "Pulp Fiction",
    genre: "Crime, Drama",
    rating: "R",
    year: "1994"
  },
  {
    title: "The Godfather",
    genre: "Crime, Drama",
    rating: "R",
    year: "1972"
  }
];

// Function to filter movies based on user preferences
function filterMovies(event) {
  event.preventDefault();

  // Get user preferences
  const genre = document.getElementById("genre").value;
  const rating = document.getElementById("rating").value;
  const year = document.getElementById("year").value;

  // Filter movies based on user preferences
  const filteredMovies = movies.filter(movie => {
    if (genre !== "All" && movie.genre !== genre) {
      return false;
    }
    if (rating !== "All" && movie.rating !== rating) {
      return false;
    }
    if (year !== "All" && movie.year !== year) {
      return false;
    }
    return true;
  });

  // Display the filtered movies
  displayMovies(filteredMovies);
}


// Event listener for the submit button
const submitBtn = document.getElementById("submit-btn");
submitBtn.addEventListener("click", filterMovies);
