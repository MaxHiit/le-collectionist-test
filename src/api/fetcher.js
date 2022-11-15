const apiBaseUrl = "https://api.themoviedb.org/3";
const apiKey = import.meta.env.VITE_API_KEY;

async function fetcher(endpoint) {
  try {
    const res = await fetch(`${apiBaseUrl}/${endpoint}&api_key=${apiKey}`);
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

export default fetcher;
