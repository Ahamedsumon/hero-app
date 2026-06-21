import { useLoaderData } from "react-router";
import Banner from "../../components/Banner/Banner";
import Facts from "../../components/Facts/Facts";
import TrendingApps from "../../components/TrendingApps/TrendingApps";

const Home = () => {
  const datas = useLoaderData();
  const filteredDataByRating = datas.filter((data) => data.ratingAvg > 4.7);

  // console.log(datas);
  return (
    <div className="bg-[#F5F5F5]">
      <Banner></Banner>
      <div className="bg-linear-to-l from-[#9F62F2] to-[#632EE3]">
        <Facts></Facts>
      </div>
      <div>
        <p className="text-4xl font-bold text-center mt-8">Trending Apps</p>
        <p className="text-center mb-8 mt-2 text-sm text-[#627382]">Explore All Trending Apps on the Market developed by us</p>
        <div className="grid sm:grid-cols-2 md:grid-cols-4  gap-4 max-w-[96%] lg:max-w-[90%] mx-auto">
        {filteredDataByRating.map((data) => (
          <TrendingApps key={data.id} data={data}></TrendingApps>
        ))}
      </div>
      </div>
      <div className="text-center mt-10">
        <button className="btn bg-linear-to-l from-[#9F62F2] to-[#632EE3] text-white text-xl">Show All</button>
      </div>
    </div>
  );
};

export default Home;
