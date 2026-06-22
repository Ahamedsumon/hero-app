const getAppsIdFromLocalStorage = () => {
  const getStoredIds = localStorage.getItem("storedApps");
  if (getStoredIds) {
    const parseIds = JSON.parse(getStoredIds);
    return parseIds;
  }
  return [];
};

const addIdsToLocalStorage = (id) => {
  const getIds = getAppsIdFromLocalStorage();

  if (getIds.includes(id)) {
    alert("Item Exists");
    return;
  }
  const updateIds = [...getIds, id];

  const convertToJson = JSON.stringify(updateIds);
  localStorage.setItem("storedApps", convertToJson);
};

export { addIdsToLocalStorage, getAppsIdFromLocalStorage };
