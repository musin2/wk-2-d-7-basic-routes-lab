import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";

function Actors() {
      const [actors, setActors] = useState([]);

      useEffect(() => {
        fetch("http://localhost:4000/actors")
          .then((resp) => resp.json())
          .then((actorData) => setActors(actorData))
          .catch((err) => console.error("GET actors request failed" + err));
      }, []);
      
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>Actors Page</h1>
        {actors.map((actor) => {
          return (
            <article key={actor.id}>
              <h2>{actor.name}</h2>
              <ul>
                {actor.movies.map((mv, index) => {
                  return <li key={index}>{mv}</li>;
                })}
              </ul>
            </article>
          );
        })}
      </main>
    </>
  );
};

export default Actors;
