import { useEffect, useState } from "react";
import {
  getAppsIdFromLocalStorage,
  removeAppIdFromLocalStorage,
} from "../../utilities/utilities";
import AppInstallationCard from "./AppInstallationCard";

const AppInstallation = () => {
  const [appsData, setAppsData] = useState([]);
  // const getStoredIds = getAppsIdFromLocalStorage();
  const [allAppsId, setAllAppsId] = useState(getAppsIdFromLocalStorage());
  console.log(allAppsId);
  useEffect(() => {
    fetch("/apps-data.json")
      .then((res) => res.json())
      .then((datas) => setAppsData(datas));
  }, []);

  const getDataByIds = appsData.filter((app) => allAppsId.includes(app.id));

  const handleUninstallBtn = (id) => {
    removeAppIdFromLocalStorage(id);
    setAllAppsId(getAppsIdFromLocalStorage());
    console.log(id);
  };

  return (
    <div className=" bg-[#F5F5F5] py-10">
      <div className="text-center my-4">
        <h2 className="text-3xl font-bold">Your Installed Apps</h2>
        <p className="text-sm text-[#627382]">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>
      <div className="max-w-[96%] lg:max-w-[90%] mx-auto my-2">
        <p className="text-[#001931]">{getDataByIds.length} Apps Found</p>
      </div>
      <div className="max-w-[96%] lg:max-w-[90%] mx-auto min-h-85">
        {getDataByIds.map((app) => (
          <AppInstallationCard
            key={app.id}
            app={app}
            handleUninstallBtn={handleUninstallBtn}
          ></AppInstallationCard>
        ))}
      </div>
    </div>
  );
};

export default AppInstallation;
