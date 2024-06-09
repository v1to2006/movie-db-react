import MovieCard, { MovieCardProps } from "./MovieCard";
import { Container } from "react-bootstrap";

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
      </div>
    </Container>
  );
};

export default CardList;
