import { Link, useLoaderData } from "react-router";
import Banner from "../../components/Banner/Banner";
import Facts from "../../components/Facts/Facts";
import TrendingApps from "../../components/TrendingApps/TrendingApps";
import { useEffect, useState } from "react";

const Home = () => {
  const [allApps, setAllApps] = useState([]);
  // const datas = useLoaderData();
  useEffect(() => {
    fetch("/apps-data.json")
      .then((res) => res.json())
      .then((datas) => setAllApps(datas));
  }, []);
  const filteredDataByRating = allApps.filter((data) => data.ratingAvg > 4.7);

  // console.log(datas);
  return (
    <div className="bg-[#F5F5F5]">
      <Banner></Banner>
      <div className="bg-linear-to-l from-[#9F62F2] to-[#632EE3]">
        <Facts></Facts>
      </div>
      <div>
        <p className="text-4xl font-bold text-center mt-8">Trending Apps</p>
        <p className="text-center mb-8 mt-2 text-sm text-[#627382]">
          Explore All Trending Apps on the Market developed by us
        </p>
        <div className="grid sm:grid-cols-2 md:grid-cols-4  gap-4 max-w-[96%] lg:max-w-[90%] mx-auto">
          {filteredDataByRating.map((data) => (
            <TrendingApps key={data.id} data={data}></TrendingApps>
          ))}
        </div>
      </div>
      <div className="text-center py-10">
        <Link to="/apps">
          <button className="btn bg-linear-to-l from-[#9F62F2] to-[#632EE3] text-white text-xl">
            Show All
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
