import { Link, useLoaderData } from "react-router";
import App from "../App/App";
import { Suspense, useState } from "react";

const Apps = () => {
  const [appsName, setAppsName] = useState("");
  const appDatas = useLoaderData();
  const handleAppsNameOnChange = (e) => {
    setAppsName(e.target.value);
  };
  const searchAppResults = appDatas.filter((data) =>
    data.title.toLowerCase().includes(appsName.toLowerCase()),
  );
  const handleShowAllBtn = (e) => {
    e.target.value = "";
    setAppsName("");
  };
  return (
    <div className=" max-w-[96%] lg:max-w-[90%] mx-auto">
      <div className="my-5">
        <h3 className="text-4xl font-bold text-center">Our All Applications</h3>
        <p className="text-sm text-center text-[#627382]">
          Explore All Apps on the Market developed by us. We code for Millions
        </p>
      </div>
      <div className="flex justify-between my-3">
        <p className="font-bold">({searchAppResults.length}) Apps Found</p>
        <input
          className="p-1 border border-[#D2D2D2] rounded"
          type="text"
          name="name"
          value={appsName}
          onChange={handleAppsNameOnChange}
          placeholder="Search Apps"
        />
      </div>

      <div>
        {searchAppResults.length > 0 ? (
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
            {searchAppResults.map((data) => (
              <App key={data.id} data={data}></App>
            ))}
          </div>
        ) : (
          <div className="h-144.5 text-center flex flex-col gap-3 justify-center items-center">
            <p className="text-3xl font-bold ">No Apps found</p>

            <button
              onClick={handleShowAllBtn}
              className="btn bg-linear-to-l from-[#9F62F2] to-[#632EE3] text-white text-xl"
            >
              Show All
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Apps;
