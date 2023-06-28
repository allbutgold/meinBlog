import { Link } from "react-router-dom";

const API_URL = import.meta.env.VITE_BACKEND_URL;

const GalleryPreview = ({ gallery }) => {
  return (
    <Link key={gallery._id} to={"/galleriesdetailpage/" + gallery._id}>
      <div>
        <img src={`${API_URL}${gallery.postGalleryImages?.[0]}`} />
        <h2>{gallery.title}</h2>
      </div>
    </Link>
  );
};

export default GalleryPreview;
