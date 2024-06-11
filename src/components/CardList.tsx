import MovieCard, { MovieCardProps } from "./MovieCard";
import { Container } from "react-bootstrap";
import ListPagination from "./ListPagination";
import { useInfiniteQuery } from "react-query";

const CardList = ({ movies }: { movies: MovieCardProps[] }) => {
  return (
    <Container fluid="md">
      <div className="d-flex flex-wrap justify-content-center p-2">
        {movies.length > 0 ? (
          movies.map((movie) => (
            <MovieCard
              key={movie.id}
              id={movie.id}
              title={movie.title}
              releaseDate={movie.releaseDate}
              imageUrl={movie.imageUrl}
            />
          ))
        ) : (
          <strong>Movie not found</strong>
        )}
        <div className="mt-5 mb-5">
          <ListPagination />
        </div>
      </div>
    </Container>
  );
};

export default CardList;
