import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import { useParams } from "react-router-dom";

function Movie() {
  const [movieInfo, setMovieInfo] = useState([]);
  const params = useParams();
  const movieId = params.id;

  useEffect(() => {
    fetch(`http://localhost:4000/movies/${movieId}`)
    .then((res) => res.json())
    .then((infData) => setMovieInfo(infData))
    .catch(error => console.error(error))
  },[])

  
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>{movieInfo.title}</h1>
        <p>{movieInfo.time}</p>
        <p>{movieInfo.genres}</p>
      </main>
    </>
  );
};

export default Movie;
