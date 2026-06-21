import bannerImage from "../../assets/hero.png";
import playstoreLogo from "../../assets/icons8-google-play-48.png";
import appstore from "../../assets/icons8-app-store-ios-40.png";
import { Link } from "react-router";
const Banner = () => {
  return (
    <div className="text-center h-150 mx-auto flex flex-col">
      <div className="text-4xl md:text-5xl lg:text-6xl font-bold mt-4">
        <h3>We Build</h3>
        <h3>
          <span className="bg-linear-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Productive
          </span>{" "}
          Apps
        </h3>
      </div>
      <p className="my-3 md:my-5 max-w-200 mx-auto">
        At HERO.IO, we craft innovative apps designed to make everyday life
        simpler, smarter, and more exciting. Our goal is to turn your ideas into
        digital experiences that truly make an impact.
      </p>
      <div>
        <Link to="https://play.google.com/store/games?hl=en">
          <button className="btn bg-white mr-3">
            <span className="max-w-10">
              <img src={playstoreLogo} alt="" />
            </span>{" "}
            Google Play
          </button>
        </Link>
        <Link to="https://www.apple.com/sa/app-store/">
          <button className="btn bg-white">
            <span className="max-w-10">
              <img src={appstore} alt="" />
            </span>{" "}
            App Store
          </button>
        </Link>
      </div>

      <div className="relative max-w-xl left-1/2 -translate-x-1/2 -translate-y-1/2 top-58 md:top-53 lg:top-47">
        <img
          className="w-full h-auto absolute  left-1/2 -translate-x-1/2 -translate-y-1/2"
          src={bannerImage}
          alt=""
        />
      </div>
    </div>
  );
};

export default Banner;
