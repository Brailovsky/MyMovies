import CardTemplate from "./Card";
import axios from "axios";
import { useEffect, useState } from "react";
import Spinner from "react-bootstrap/Spinner";
function Top10upcoming() {
  const [movie, setMovie] = useState("");

  useEffect(() => {
    async function fetchMovies() {
      const res = await axios.get("http://localhost:3000/api/top10upcoming");
      setMovie(res.data);
    }
    fetchMovies();
  }, []);

  return (
    <div>
      <div
        style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      >
        {!movie && <Spinner animation="border" />}{" "}
        {movie &&
          movie.map((item, i) => (
            <CardTemplate
              title={item.title}
              key={i}
              image={item.image}
              ratting={item.rating}
              id={item.id}
              year={item.year}
            />
          ))}
      </div>
    </div>
  );
}

export default Top10upcoming;
