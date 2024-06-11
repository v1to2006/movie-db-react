import React from "react";
import { useParams } from "react-router-dom";
import { z } from "zod";

const responseMovieDetailsType = z.object({
  title: z.string(),
  
});

const MovieDetails = () => {
  let { movieId } = useParams();

  return <div>MovieId: {movieId}</div>;
};

export default MovieDetails;
