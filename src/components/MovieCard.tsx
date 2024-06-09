import { Card } from "react-bootstrap";

export interface MovieCardProps {
  id: number;
  title: string;
  releaseDate: string;
  imageUrl: string | null;
}

const MovieCard = ({ id, title, releaseDate, imageUrl }: MovieCardProps) => {
  return (
    <Card key={id} style={{ width: "14rem" }} className="m-1">
      <Card.Img
        variant="top"
        src={
          imageUrl
            ? `https://media.themoviedb.org/t/p/w220_and_h330_face${imageUrl}`
            : "https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-38-picture-grey-c2ebdbb057f2a7614185931650f8cee23fa137b93812ccb132b9df511df1cfac.svg"
        }
      />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{releaseDate}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default MovieCard;
