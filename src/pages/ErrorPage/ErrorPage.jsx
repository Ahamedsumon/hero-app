import { Link } from "react-router";
import errorImage from "../../assets/error-404.png";
const ErrorPage = () => {
  return (
    <div className="h-177 flex justify-center items-center">
      <div>
        <img src={errorImage} alt="" />
        <div className="text-center">
          <p className="text-2xl font-bold">Oops, page not found!</p>
          <p className="text-sm text-[#627382] my-2">
            The page you are looking for is not available
          </p>
          <Link to="/">
            <button className="btn bg-linear-to-l from-[#9F62F2] to-[#632EE3] text-white text-xl">
              Go Back!
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
