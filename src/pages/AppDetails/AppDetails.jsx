import { useEffect, useState } from "react";
import { useParams } from "react-router";
import reviewIcon from "../../assets/icon-review.png";
import downloadIcon from "../../assets/icon-downloads.png";
import ratingIcon from "../../assets/icon-ratings.png";
import { Bar, BarChart, XAxis, YAxis } from "recharts";
const AppDetails = () => {
  const [allApps, setAllApps] = useState([]);
  const { appId } = useParams();

  useEffect(() => {
    fetch("/apps-data.json")
      .then((res) => res.json())
      .then((apps) => setAllApps(apps));
  }, []);

  const findAppById = allApps.find((app) => app.id === +appId);
  if (!findAppById) {
    return <div>Loading...</div>;
  }
  const {
    image,
    title,
    downloads,
    ratingAvg,
    reviews,
    companyName,
    size,
    description,
    ratings,
  } = findAppById;
  //   const appsRating = ratings.map((rating) => {
  //     const ratingObject = {
  //       name: rating.name,
  //       count: rating.count,
  //     };
  //     return ratingObject;
  //   });
  //   console.log(appsRating);
  console.log(ratings);
  const reversedRatings = [...ratings].reverse();
  return (
    <div className=" bg-[#F5F5F5]">
      <div className="flex flex-col md:flex-row  gap-5 max-w-[96%] lg:max-w-[90%] mx-auto pb-8 border-b border-[#00193130]">
        <div className="">
          <figure className="max-w-90 h-auto">
            <img className="rounded" src={image} alt={`Image of ${title}`} />
          </figure>
        </div>
        <div className="flex-2">
          <svg width="0" height="0">
            <defs>
              <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#54CF68" />
                <stop offset="100%" stopColor="#00827A" />
              </linearGradient>
            </defs>
          </svg>
          <p className="text-xl font-bold">{title}</p>
          <p className="border-b border-[#00193130] pb-3 mb-2">
            <span>Develoved By: </span>
            <span>{companyName}</span>
          </p>
          <div className=" lg:max-w-[50%] flex justify-between">
            <div>
              <p className="text-3xl">
                <span>
                  {/* <MdOutlineFileDownload style={{ fill: "url(#grad1)" }} /> */}
                  <img src={downloadIcon} alt="" />
                </span>
              </p>
              <p className="font-bold my-1">Downloads</p>
              <p className="text-[#00D390] ">{downloads}</p>
            </div>
            <div>
              <p className="text-[#FF8811] text-2xl">
                <span>
                  {/* <FaStar /> */}
                  <img src={ratingIcon} alt="" />
                </span>
              </p>
              <p className="font-bold my-1">Average Ratings</p>
              <p className="font-bold">{ratingAvg}</p>
            </div>
            <div>
              <p className="text-[#FF8811] text-xl">
                <span>
                  <img src={reviewIcon} alt="" />
                </span>
              </p>
              <p className="font-bold my-1">Average Ratings</p>
              <p className="font-bold">{reviews}</p>
            </div>
          </div>
          <div className="mt-5">
            <button className="btn bg-[#00D390] text-white">
              Install Now ({size} MB)
            </button>
          </div>
        </div>
      </div>
      {/* Ratings charts starts here */}
      <div className="max-w-[96%] lg:max-w-[90%] mx-auto">
        <p className="text-xl font-bold mt-7 mb-3">Ratings</p>
        <div>
          <BarChart
            style={{
              width: "100%",
              maxWidth: "700px",
              maxHeight: "70vh",
              aspectRatio: 1.618,
            }}
            height={300}
            data={reversedRatings}
            layout="vertical"
          >
            <XAxis type="count"></XAxis>
            <YAxis type="category" dataKey="name"></YAxis>
            <Bar dataKey="count" fill="#8884d8"></Bar>
          </BarChart>
        </div>
      </div>
      {/* Description starts here */}
      <div className="max-w-[96%] lg:max-w-[90%] mx-auto">
        <p className="text-xl font-bold mt-7 mb-3">Description</p>
        <p className="text-sm text-[#627382]">{description}</p>
      </div>
    </div>
  );
};

export default AppDetails;
