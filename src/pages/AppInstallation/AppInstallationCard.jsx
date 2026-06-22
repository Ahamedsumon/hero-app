const AppInstallationCard = ({ app }) => {
  const { image, title, downloads, ratingAvg, size } = app;
  console.log(app);
  return (
    <div className="bg-base-100 shadow-sm mb-5 flex items-center justify-between py-5 px-2">
      <div className="flex  gap-5">
        <figure className="size-30 h-auto">
          <img className="rounded" src={image} alt={`Image of ${title}`} />
        </figure>
        <div className="">
          <p>{title}</p>
          <div className="flex gap-4">
            <p className="text-[#00D390]">{downloads}</p>
            <p className="text-[#FF8811]">{ratingAvg}</p>
            <p className="text-[#627382]">{size} MB</p>
          </div>
        </div>
      </div>
      <div className="">
        <button className="btn btn-primary">Watch</button>
      </div>
    </div>
  );
};

export default AppInstallationCard;
