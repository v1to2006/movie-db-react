import CardList from "../components/CardList";
import { useEffect, useState } from "react";
import { MovieCardProps } from "../components/MovieCard";
import { options, responseType } from "../App";
import { useNavigate, useParams } from "react-router-dom";

function Search() {
  const [data, setData] = useState<MovieCardProps[]>([]);
  const navigate = useNavigate();
  let { searchQuery } = useParams();
  console.log(searchQuery);

  useEffect(() => {
    const fetchData = async () => {
      const fetchedMovies = await fetch(
        `https://api.themoviedb.org/3/search/movie?query=${searchQuery}&include_adult=false&language=en-US&page=1`,
        options
      )
        .then((response) => response.json())
        .then((response) => responseType.parse(response))
        .catch((err) => console.error(err));

      if (fetchedMovies)
        setData(
          fetchedMovies.results.map((x) => {
            return {
              id: x.id,
              title: x.title,
              releaseDate: x.release_date,
              imageUrl: x.poster_path,
            };
          })
        );
    };

    fetchData().catch(console.error);
  }, [navigate]);

  return (
    <>
      <h2 className="d-flex flex-wrap justify-content-center p-2">
        "{searchQuery}" Movies
      </h2>
      <CardList movies={data} />
    </>
  );
}

export default Search;
