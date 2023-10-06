import { useState, useEffect } from "react";
import AddMovie from "./Components/AddMovie/AddMovie";
import "./App.css";
import MovieList from "./Components/MovieList/MovieList";
import Header from "./Components/Header/Header";
import Description from "./Components/Description/Description";
import { Routes, Route } from "react-router-dom";

const info = [
  {
    title: "Prison Break",
    trailer: "https://www.youtube.com/embed/AL9zLctDJaU",
    img: "/image/Prison Break.jpg",
    description:
      "The main storyline of Prison Break revolves around Michael Scofield, played by Wentworth Miller, who intentionally gets himself incarcerated in the Fox River State Penitentiary in Illinois to help his wrongly accused brother, Lincoln Burrows, played by Dominic Purcell, escape from death row. Michael is a structural engineer with a tattooed body map of the prison's layout and a detailed escape plan. He befriends fellow inmates and forms alliances to execute their escape.",
    posterURL: "www.prisonbreak.com",
    rating: 8.3,
  },
  {
    title: "The Expanse",
    trailer: "https://www.youtube.com/embed/caLji74IIp4",
    img: "/image/The Expanse.jpg",
    description:
      "Set in a future where humanity has colonized the solar system, The Expanse is known for its complex and politically driven storyline, as well as its realistic portrayal of space and its challenges. The series is a blend of science fiction, political drama, and space opera. ",
    posterURL: "www.theexpanse.com",
    rating: 8.5,
  },
];

function App() {
  const [list, setList] = useState(info);
  const [filtredList, setFiltredList] = useState(list);
  const [rate, setRate] = useState(0);
  const [keyword, setKeyword] = useState("");

  function adding(movie) {
    if (movie.title && movie.img && movie.description && movie.posterURL) {
      setList([...list, movie]);
    }
  }

  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <>
              {" "}
              <Header /> <MovieList list={filtredList} />{" "}
              <AddMovie adding={adding} />{" "}
            </>
          }
        />
        <Route path="/:id" element={<Description list={list} />} />
      </Routes>
    </div>
  );
}

export default App;
