import axios from "axios";

/** base url to make requests to the movie database */
const instance = axios.create({
  baseURL: "http://www.omdbapi.com/?apikey=a3d2c83e",
});

export default instance;