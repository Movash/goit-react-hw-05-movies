import { Link } from "react-router-dom";

const MovieGalleryItem = ({ movie: { id, original_title } }) => {
  return (
    <li className="MovieGalleryItem">
      <Link to={`/movies/${id}`}>{original_title}</Link>
    </li>
  );
};

export default MovieGalleryItem;
