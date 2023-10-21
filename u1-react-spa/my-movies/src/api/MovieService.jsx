import axios from "axios";

const BASE_URL = "https://api.tvmaze.com";
const withBaseUrl = (path) => `${BASE_URL}${path}`;

export class MovieService {
  static getHeroShows() {
    return axios(withBaseUrl("/search/shows?q=hero"));
  }

  static getHorrorShows() {
    return axios(withBaseUrl("/search/shows?q=horror"));
  }

  static getShowById(id) {
    return axios(withBaseUrl(`/shows/${id}`));
  }
}
