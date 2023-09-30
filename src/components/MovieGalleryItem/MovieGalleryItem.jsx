import { Link, useLocation } from "react-router-dom";

const MovieGalleryItem = ({ movie: { id, original_title } }) => {
  const location = useLocation()
  return (
    <li className="MovieGalleryItem">
      <Link to={`/movies/${id}`} state={location}>
        {original_title}
      </Link>
    </li>
  );
};

export default MovieGalleryItem;
