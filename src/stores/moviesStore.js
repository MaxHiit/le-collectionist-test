import { defineStore } from "pinia";
import fetcher from "../api/fetcher";

export const useMovieStore = defineStore("moviesStore", {
  state: () => ({
    popularMovies: [],
    singleMovie: {},
    selectedMainMovie: {},
    page: 1,
    userFavMovies: [],
    genresList: [],
    loading: false,
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
      return (genreId) =>
        state.genresList.find((el) => el.id === genreId)?.name;
    },
    getMovieIdCast(state) {
      return state.singleMovie.casts
        ?.filter((persn) => persn.popularity > 5)
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
      this.loading = true;
      const endpoint = `movie/popular?language=en-US&page=${this.page}`;
      try {
        const data = await fetcher(endpoint);
        const newArrMovies = data.results.map((el) => ({
          ...el,
          isFav: false,
        }));

        this.popularMovies = newArrMovies;
        this.selectedMainMovie = this.popularMovies[0];
        this.loading = false;
      } catch (error) {
        console.log(error);
      }
    },
    async fetchGenresList() {
      this.loading = true;
      try {
        const data = await fetcher("genre/movie/list?language=en-US");
        this.genresList = data.genres;
        this.loading = false;
      } catch (error) {
        console.log(error);
      }
    },
    async fetchSingleMovie(id) {
      this.loading = true;
      try {
        let endpoint = `movie/${id}?language=en-US`;
        const data = await fetcher(endpoint);
        this.singleMovie = data;
        this.loading = false;
      } catch (error) {
        console.log(error);
      }
    },
    async fetchMovieIDCast(id) {
      this.loading = true;
      try {
        let endpoint = `movie/${id}/credits?language=en-US`;
        const data = await fetcher(endpoint);
        this.singleMovie = { ...this.singleMovie, casts: data.cast };
        this.loading = false;
      } catch (error) {
        console.log(error);
      }
    },
    async updatePopularMovies() {
      this.page++;
      const endpoint = `movie/popular?language=en-US&page=${this.page}`;
      const data = await fetcher(endpoint);
      data.results.map((el) =>
        this.popularMovies.push({
          ...el,
          isFav: false,
        })
      );
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
