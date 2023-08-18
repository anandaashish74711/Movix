import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
const TMDB_TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1YzE4MmY3NTZmODEzYzE4ODYxNTNkMTg5MWZiZTdhMCIsInN1YiI6IjY0ZGIyZDA5MDAxYmJkMDEzYWVmOThlOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.X3uNiI2wJx7DWIAV82FJ1kX5WpPCkIHZoyzU2en2I-E";
const headers = {
  Authorization: "bearer " + TMDB_TOKEN,
};

export const fetchDataFromApi = async (url, params) => {
  try {
    const { data } = await axios.get(BASE_URL + url, {
      headers,
      params,
    });
    return data;
  } catch (err) {
    console.log(err);
    return err;
  }
};
