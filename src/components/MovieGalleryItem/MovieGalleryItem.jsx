import { Link, useLocation } from "react-router-dom";
import { GalleryItem } from "./MovieGalleryItem.styled";

const MovieGalleryItem = ({
  movie: { id, original_title, backdrop_path, title },
}) => {
  const location = useLocation();
  const defaultImg = 'https://www.micreate.eu/wp-content/img/default-img.png';
  return (
    <GalleryItem className="MovieGalleryItem">
      <Link to={`/movies/${id}`} state={location}>
        <img
          src={
            backdrop_path
              ? `https://image.tmdb.org/t/p/w400/${backdrop_path}`
              : defaultImg
          }
          alt={title}
          width="400px"
        />
        <p>{original_title}</p>
      </Link>
    </GalleryItem>
  );
};

export default MovieGalleryItem;
