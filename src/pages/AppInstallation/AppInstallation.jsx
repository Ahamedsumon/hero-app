import { useEffect, useState } from "react";
import { getAppsIdFromLocalStorage } from "../../utilities/utilities";
import AppInstallationCard from "./AppInstallationCard";

const AppInstallation = () => {
  const [appsData, setAppsData] = useState([]);
  const getStoredIds = getAppsIdFromLocalStorage();

  useEffect(() => {
    fetch("/apps-data.json")
      .then((res) => res.json())
      .then((datas) => setAppsData(datas));
  }, []);
  const getDataByIds = appsData.filter((app) => getStoredIds.includes(app.id));

  return (
    <div className="max-w-[96%] lg:max-w-[90%] mx-auto">
      <h2>This is App Installation Page</h2>
      {getDataByIds.map((app) => (
        <AppInstallationCard key={app.id} app={app}></AppInstallationCard>
      ))}
    </div>
  );
};

export default AppInstallation;
