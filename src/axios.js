import axios from "axios";

/** base url to make requests to the movie database */
const instance = axios.create({
  baseURL: "http://www.omdbapi.com/?apikey=1658ee22",
});

export default instance;