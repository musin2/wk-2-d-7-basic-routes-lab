import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";

function Directors() {
    const [directors, setDirectors] = useState([]);

      useEffect(() => {
        fetch("http://localhost:4000/directors")
          .then((resp) => resp.json())
          .then((drData) => setDirectors(drData))
          .catch((err) => console.error("GET directors request failed" + err));
      }, []);

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>Directors Page</h1>
        {
          directors.map((director) => {
            return <article key={director.id} >
              <h2>{director.name}</h2>
              <ul>
                {director.movies.map((mv, index)=> {
                  return <li key={index} >{mv}</li>
                })}
              </ul>
              </article>
          })
        }
      </main>
    </>
  );
};

export default Directors;
