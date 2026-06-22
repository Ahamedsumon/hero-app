const TrendingApps = ({ data }) => {
  const { image, title, downloads, ratingAvg } = data;
  console.log(data);
  return (
    <div className="card bg-base-100 shadow-sm">
      <figure className="px-2 pt-2">
        <img src={image} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className=" p-2">
        <h2 className="text-sm">{title}</h2>
        <div className=" flex justify-between py-2">
          <p>{downloads}</p>
          <p className="text-end">{ratingAvg}</p>
        </div>
      </div>
    </div>
  );
};

export default TrendingApps;
