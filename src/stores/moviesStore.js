import { defineStore } from "pinia";

export const useMovieStore = defineStore("moviesStore", {
  state: () => ({
    popularMovies: [],
    singleMovie: {},
    selectedMainMovie: {},
    userFavMovies: [],
    genresList: [],
    filtersGenreChoice: [],
  }),
  getters: {
    getMainMovie(state) {
      return state.selectedMainMovie;
    },
    getPopularMovie(state) {
      return state.popularMovies;
    },
    getFilterMovie(state) {
      if (!state.filtersGenreChoice.length) {
        return state.popularMovies;
      }

      const currentArr = state.popularMovies.filter((movie) =>
        state.filtersGenreChoice.every((genre) =>
          movie.genre_ids.includes(genre.id)
        )
      );

      return currentArr;
    },
    getGenreName: (state) => {
      return (genreId) => state.genresList.find((el) => el.id === genreId).name;
    },
    getMovieIdCast(state) {
      return state.singleMovie.casts
        .filter((persn) => persn.popularity > 20)
        .slice(0, 6);
    },
    getTopMovies(state) {
      return state.popularMovies.slice(0, 4);
    },
    displayThreeGenre: () => {
      return (genreArr) => genreArr.slice(0, 3);
    },
  },
  actions: {
    async fetchPopularMovies() {
      const apiBaseUrl = "https://api.themoviedb.org/3";
      const apiKey = import.meta.env.VITE_API_KEY;
      try {
        const res = await fetch(
          `${apiBaseUrl}/movie/popular?api_key=${apiKey}&language=en-US&page=1`
        );
        const data = await res.json();

        const newArrMovie = data.results.map((el) => ({ ...el, isFav: false }));

        this.popularMovies = newArrMovie;
        this.selectedMainMovie = this.popularMovies[0];
      } catch (error) {
        console.log(error);
      }
    },
    async fetchGenresList() {
      const apiBaseUrl = "https://api.themoviedb.org/3";
      const apiKey = import.meta.env.VITE_API_KEY;
      try {
        const res = await fetch(
          `${apiBaseUrl}/genre/movie/list?api_key=${apiKey}&language=en-US`
        );
        const data = await res.json();

        this.genresList = data.genres;
      } catch (error) {
        console.log(error);
      }
    },
    async fetchSingleMovie(id) {
      const apiBaseUrl = "https://api.themoviedb.org/3";
      const apiKey = import.meta.env.VITE_API_KEY;
      try {
        const res = await fetch(
          `${apiBaseUrl}/movie/${id}?api_key=${apiKey}&language=en-US`
        );
        const data = await res.json();

        this.singleMovie = data;
      } catch (error) {
        console.log(error);
      }
    },
    async fetchMovieIDCast(id) {
      const apiBaseUrl = "https://api.themoviedb.org/3";
      const apiKey = import.meta.env.VITE_API_KEY;
      try {
        const res = await fetch(
          `${apiBaseUrl}/movie/${id}/credits?api_key=${apiKey}&language=en-US`
        );
        const data = await res.json();

        this.singleMovie = { ...this.singleMovie, casts: data.cast };
      } catch (error) {
        console.log(error);
      }
    },
    getImage(imagePath) {
      const urlBase = "https://image.tmdb.org/t/p/original";
      const urlImage = `${urlBase}${imagePath}`;
      return urlImage;
    },
    updateSelectedMainMovie(index) {
      this.selectedMainMovie = this.popularMovies[index];
    },
    updateFilterChoice(genre, refItem) {
      const newGenre = {
        id: genre.id,
        name: genre.name.toLowerCase(),
      };
      const genreFilterChoiceIndex = this.filtersGenreChoice.findIndex(
        (t) => t.id === newGenre.id
      );

      if (genreFilterChoiceIndex === -1) {
        this.filtersGenreChoice.push(newGenre);
        refItem.classList.add("filter-item--active");
      } else {
        this.filtersGenreChoice.splice(genreFilterChoiceIndex, 1);
        refItem.classList.remove("filter-item--active");
      }
    },
    updateMovieList(movie) {
      const updatedMovie = [...this.popularMovies];

      const movieIndex = updatedMovie.find((m) => m.id === movie.id);

      movieIndex.isFav = !movieIndex.isFav;

      this.popularMovies = updatedMovie;
    },
    addFav(movie) {
      const updatedMovie = {
        ...movie,
        isFav: true,
      };
      const movieIndex = this.userFavMovies.findIndex((m) => m.id === movie.id);
      if (movieIndex <= 0) {
        this.userFavMovies.push(updatedMovie);
        this.updateMovieList(movie);
      } else {
        return;
      }
    },
    removeFav(movie) {
      const updatedMovie = [...this.userFavMovies];
      const index = this.userFavMovies.findIndex((m) => m.id === movie.id);
      updatedMovie.splice(index, 1);
      this.userFavMovies = updatedMovie;

      this.updateMovieList(movie);
    },
    updateFavMovie(movie) {
      if (!movie.isFav) {
        return this.addFav(movie);
      }
      if (movie.isFav) {
        return this.removeFav(movie);
      }
    },
  },
});
