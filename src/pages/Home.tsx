import CardList from "../components/CardList";
import { useEffect, useState } from "react";
import { MovieCardProps } from "../components/MovieCard";
import { options, responseType } from "../App";

function Home() {
  const [data, setData] = useState<MovieCardProps[]>([]);
  const [pageNumber, setPageNumber] = useState(1);

  useEffect(() => {
    const fetchData = async (pageNumber: number) => {
      const fetchedMovies = await fetch(
        `https://api.themoviedb.org/3/movie/popular?language=en-US&page=${pageNumber}`,
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

    fetchData(pageNumber).catch(console.error);
  }, []);

  return (
    <>
      <h2 className="d-flex flex-wrap justify-content-center p-2">
        Popular Movies
      </h2>
      <CardList movies={data} />
    </>
  );
}

export default Home;
