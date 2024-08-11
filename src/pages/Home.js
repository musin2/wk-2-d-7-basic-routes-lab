import { useEffect, useState } from "react";
import NavBar from "../components/NavBar"
import MovieCard from "../components/MovieCard";

function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/movies")
    .then((resp) =>  resp.json())
    .then((mvData) => setMovies(mvData))
    .catch((err) => console.error("GET movies request failed"+ err))
  },[])

  if(!movies) return <h1>Loading...</h1>

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>Home Page</h1>
        {
          movies.map((movie) => {
           return <MovieCard key={movie.id} title={movie.title} id={movie.id} />;
          })
        }
      </main>
    </>
  );
};

export default Home;
