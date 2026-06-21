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
      <div className="grid grid-cols-4 gap-4 max-w-[96%] lg:max-w-[90%] mx-auto">
        {filteredDataByRating.map((data) => (
          <TrendingApps key={data.id} data={data}></TrendingApps>
        ))}
      </div>
    </div>
  );
};

export default Home;
