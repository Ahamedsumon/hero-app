import bannerImage from "../../assets/hero.png";
import playstoreLogo from "../../assets/icons8-google-play-48.png";
import appstore from "../../assets/icons8-app-store-ios-40.png";
const Banner = () => {
  return (
    <div className="text-center h-screen mx-auto">
      <div className="text-6xl font-bold">
        <h3>We Build</h3>
        <h3>
          <span className="bg-linear-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Productive
          </span>{" "}
          Apps
        </h3>
      </div>
      <p className="my-5 max-w-200 mx-auto">
        At HERO.IO, we craft innovative apps designed to make everyday life
        simpler, smarter, and more exciting. Our goal is to turn your ideas into
        digital experiences that truly make an impact.
      </p>
      <button className="btn bg-white mr-3">
        <span className="max-w-10">
          <img src={playstoreLogo} alt="" />
        </span>{" "}
        Google Play
      </button>
      <button className="btn bg-white">
        <span className="max-w-10">
          <img src={appstore} alt="" />
        </span>{" "}
        App Store
      </button>

      <div className="relative">
        <img
          className="absolute top-70 left-1/2 -translate-x-1/2 -translate-y-1/2"
          src={bannerImage}
          alt=""
        />
      </div>
    </div>
  );
};

export default Banner;
