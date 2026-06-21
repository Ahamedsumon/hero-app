const Facts = () => {
  return (
    <div className=" text-white max-w-[96%] lg:max-w-[90%] mx-auto py-10">
      <h3 className="text-3xl font-bold pb-8 text-center">
        Trusted By Millions, Built For You
      </h3>
      <div className="flex justify-around max-w-[85%] lg:max-w-[70%] mx-auto">
        <div className="text-center">
          <p className="text-xs">Total Downloads</p>
          <p className="text-4xl font-bold my-2">29.6M</p>
          <p className="text-xs">21% more than last month</p>
        </div>
        <div className="text-center">
          <p className="text-xs">Total Reviews</p>
          <p className="text-4xl font-bold my-2">906K</p>
          <p className="text-xs">46% more than last month</p>
        </div>
        <div className="text-center">
          <p className="text-xs">Active Apps</p>
          <p className="text-4xl font-bold my-2">132+</p>
          <p className="text-xs">31 more will Launch</p>
        </div>
      </div>
    </div>
  );
};

export default Facts;
