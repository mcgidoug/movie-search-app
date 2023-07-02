export async function getMovies(userInput, page) {
  const url = `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_OMDB_KEY}&s=${userInput}&page=${page}`;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("Error: " + response.status);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
}
