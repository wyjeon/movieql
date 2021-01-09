let movies = [
  {
    id: 0,
    name: "Spider man",
    score: 100
  },
  {
    id: 1,
    name: "Iron man",
    score: 70
  },
  {
    id: 2,
    name: "Thor",
    score: 60
  }
];

export const getMovies = () => movies;

export const getById = id => {
  const filteredMovies = movies.filter(movie => movie.id === String(id));
  return filteredMovies[0];
}

export const deleteMovie = id => {
  const cleanedMovies = movies.filter(movie => movie.id !== String(id));
  if(movies.length > cleanedMovies.length) {
    movies = cleanedMovies;
    return true;
  } else {
    return false;
  }
}

export const addMovie = (name, score) => {
  const newMovie = {
    id: `${movies.length+1}`,
    name,
    score
  }
  movies.push(newMovie);
  return newMovie;
}