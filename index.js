let movies = [
  {
    id: 1,
    title: "The Fast and the Furious",
    year: 2001,
    genre: "Action",
    rating: 6.8
  },
  {
    id: 2,
    title: "2 Fast 2 Furious",
    year: 2003,
    genre: "Action",
    rating: 5.9
  },
  {
    id: 3,
    title: "The Fast and the Furious: Tokyo Drift",
    year: 2006,
    genre: "Action",
    rating: 6.0
  },
  {
    id: 4,
    title: "Fast & Furious",
    year: 2009,
    genre: "Action",
    rating: 6.6
  },
  {
    id: 5,
    title: "Fast Five",
    year: 2011,
    genre: "Action",
    rating: 7.3
  },
  {
    id: 6,
    title: "Fast & Furious 6",
    year: 2013,
    genre: "Action",
    rating: 7.0
  },
  {
    id: 7,
    title: "Furious 7",
    year: 2015,
    genre: "Action",
    rating: 7.1
  },
  {
    id: 8,
    title: "The Fate of the Furious",
    year: 2017,
    genre: "Action",
    rating: 6.6
  },
  {
    id: 9,
    title: "F9: The Fast Saga",
    year: 2021,
    genre: "Action",
    rating: 5.2
  }
];
app.get("/movies/search", (req, res) => {
  const { title, genre, year, minRating, maxRating } = req.query;

  let results = movies;

  // Title search (keyword)
  if (title) {
    results = results.filter(m =>
      m.title.toLowerCase().includes(title.toLowerCase())
    );
  }

  // Genre filter
  if (genre) {
    results = results.filter(m =>
      m.genre.toLowerCase() === genre.toLowerCase()
    );
  }

  // Year filter
  if (year) {
    results = results.filter(m => m.year === parseInt(year));
  }

  // Rating filters
  if (minRating) {
    results = results.filter(m => m.rating >= parseFloat(minRating));
  }

  if (maxRating) {
    results = results.filter(m => m.rating <= parseFloat(maxRating));
  }

  res.json(results);
});
window.addEventListener("load", () => {
  const loader = document.getElementById("loading-screen");
  loader.classList.add("fade-out");
});

  
