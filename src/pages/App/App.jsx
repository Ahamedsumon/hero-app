const App = ({ data }) => {
  const { image, title, downloads, ratingAvg } = data;
  return (
    <div className="card bg-base-100 shadow-sm">
      <figure className="px-2 pt-2">
        <img src={image} alt={`Photo of ${title}`} className="rounded-xl" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Title: {title}</h2>
        <div className=" flex">
          <p>{downloads}</p>
          <p className="text-end">{ratingAvg}</p>
        </div>
      </div>
    </div>
  );
};

export default App;
