import { useLoaderData } from "react-router";
import App from "../App/App";
import { useState } from "react";

const Apps = () => {
  const [appsName, setAppsName] = useState("")
  const appDatas = useLoaderData();
  const handleAppsNameOnChange = (e) => {
      setAppsName(e.target.value)
  }
  const searchAppResults = appDatas.filter(data => data.title.toLowerCase().includes(appsName.toLowerCase()));
 
  return (
    <div className=" max-w-[96%] lg:max-w-[90%] mx-auto">
      <div className="my-5">
        <h3 className="text-4xl font-bold text-center">Our All Applications</h3>
        <p className="text-sm text-center text-[#627382]">Explore All Apps on the Market developed by us. We code for Millions</p>
      </div>
      <div className="flex justify-between my-3">
        <p className="font-bold">({searchAppResults.length}) Apps Found</p>
        <input className="p-1 border border-[#D2D2D2] rounded" type="text" name="name" defaultValue={appsName} onChange={handleAppsNameOnChange} placeholder="Search Apps" />
      </div>
      <div className="grid sm:grid-cols-2 md:grid-cols-4  gap-4 ">
        {
          searchAppResults.map(data => <App key={data.id} data={data}></App>)
        }
      </div>
    </div>
  );
};

export default Apps;
