import { MdOutlineFileDownload } from "react-icons/md";
import { FaStar } from "react-icons/fa6";

const AppInstallationCard = ({ app, handleUninstallBtn }) => {
  const { id, image, title, downloads, ratingAvg, size } = app;

  return (
    <div className="bg-base-100 shadow-sm mb-5 flex flex-col gap-4 md:gap-0 md:flex-row md:items-center justify-between py-5 px-2 rounded">
      <div className="flex  gap-5">
        <figure className="size-30 h-auto">
          <img className="rounded" src={image} alt={`Image of ${title}`} />
        </figure>
        <div className="flex justify-between">
          <div>
            <p>{title}</p>
            <div className="flex gap-4">
              <p className="text-[#00D390] flex items-center gap-1">
                <span>{<MdOutlineFileDownload />}</span> {downloads}
              </p>
              <p className="text-[#FF8811] flex items-center gap-1">
                <span>
                  <FaStar />
                </span>{" "}
                {ratingAvg}
              </p>
              <p className="text-[#627382]">{size} MB</p>
            </div>
          </div>
          {/* <div className="">
            <button
              onClick={() => handleUninstallBtn(id)}
              className="btn bg-[#00D390] text-white"
            >
              Uninstall
            </button>
          </div> */}
        </div>
      </div>
      <div className="">
        <button
          onClick={() => handleUninstallBtn(id)}
          className="btn bg-[#00D390] text-white"
        >
          Uninstall
        </button>
      </div>
    </div>
  );
};

export default AppInstallationCard;
