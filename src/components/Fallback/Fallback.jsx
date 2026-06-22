import { BallTriangle } from "react-loader-spinner";

const Fallback = () => {
  return (
    <div className="h-screen flex justify-center flex-col items-center">
      <div>
        <BallTriangle
          height={100}
          width={100}
          radius={5}
          color="#4fa94d"
          ariaLabel="ball-triangle-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
      </div>
    </div>
  );
};

export default Fallback;
