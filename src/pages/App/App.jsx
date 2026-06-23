import { Link } from "react-router";
import { addIdsToLocalStorage } from "../../utilities/utilities";

const App = ({ data }) => {
  const { id, image, title, downloads, ratingAvg } = data;
  const handleAppsCard = (id) => {
    addIdsToLocalStorage(id);
  };
  return (
    <Link to={`/apps-data/${id}`}>
      <div
        onClick={() => handleAppsCard(id)}
        className="card bg-base-100 shadow-sm"
      >
        <figure className="px-2 pt-2">
          <img src={image} alt={`Photo of ${title}`} className="rounded-xl" />
        </figure>
        <div className=" p-2">
          <h2 className="text-sm">{title}</h2>
          <div className=" flex justify-between py-2">
            <p>{downloads}</p>
            <p className="">{ratingAvg}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default App;
